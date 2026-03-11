import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cita } from './entities/cita.entity';
import { CreateCitaDto } from './dto/create-cita.dto';
import { MedicosService } from '../medicos/medicos.service';
import { PacientesService } from '../pacientes/pacientes.service';
import { UpdateCitaDto } from './dto/update-cita.dto';

@Injectable()
export class CitasService {
  constructor(
    @InjectRepository(Cita)
    private readonly citaRepository: Repository<Cita>,
    private readonly medicosService: MedicosService,
    private readonly pacientesService: PacientesService,
  ) { }

  async create(dto: CreateCitaDto): Promise<Cita> {
    //Validación: la fecha 
    const fechaCita = new Date(dto.fechaCita);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    if (fechaCita < hoy) {
      throw new BadRequestException('La fecha de la cita no puede ser anterior a la fecha actual');
    }

    const paciente = await this.pacientesService.findOne(dto.pacienteId);
    const medico = await this.medicosService.findOne(dto.medicoId);

    const cita = this.citaRepository.create({
      fechaCita,
      motivo: dto.motivo,
      paciente,
      medico,
      diagnosticos: dto.diagnosticos ?? [],
    });

    return await this.citaRepository.save(cita);
  }

  async update(id: number, dto: UpdateCitaDto): Promise<Cita> {
    const cita = await this.findOne(id);

    if (dto.fechaCita) {
      const fechaCita = new Date(dto.fechaCita);
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);
      if (fechaCita < hoy) {
        throw new BadRequestException('La fecha de la cita no puede ser anterior a la fecha actual');
      }
      cita.fechaCita = fechaCita;
    }

    if (dto.medicoId) {
      cita.medico = await this.medicosService.findOne(dto.medicoId);
    }
    if (dto.pacienteId) {
      cita.paciente = await this.pacientesService.findOne(dto.pacienteId);
    }

    Object.assign(cita, dto);
    return await this.citaRepository.save(cita);
  }

  async findAll(): Promise<Cita[]> {
    return await this.citaRepository.find({
      relations: ['diagnosticos'],
    });
  }

  async findOne(id: number): Promise<Cita> {
    const cita = await this.citaRepository.findOne({
      where: { id },
      relations: ['diagnosticos', 'paciente', 'medico', 'medico.especialidad'],
    });
    if (!cita) {
      throw new NotFoundException(`Cita #${id} no encontrada`);
    }
    return cita;
  }

  async remove(id: number): Promise<void> {
    const cita = await this.findOne(id);
    await this.citaRepository
      .createQueryBuilder()
      .relation(Cita, 'diagnosticos')
      .of(cita)
      .remove(cita.diagnosticos);

    await this.citaRepository.delete(id);
  }
}