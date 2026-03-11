import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medico } from './entities/medico.entity';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { EspecialidadesService } from '../especialidades/especialidades.service';
import { UpdateMedicoDto } from './dto/update-medico.dto';

@Injectable()
export class MedicosService {
  constructor(
    @InjectRepository(Medico)
    private readonly medicoRepository: Repository<Medico>,
    private readonly especialidadesService: EspecialidadesService,
  ) { }

  async create(dto: CreateMedicoDto): Promise<Medico> {
    const especialidad = await this.especialidadesService.findOne(dto.especialidadId);
    const medico = this.medicoRepository.create({
      ...dto,
      especialidad,
    });
    return await this.medicoRepository.save(medico);
  }

  async update(id: number, dto: UpdateMedicoDto): Promise<Medico> {
    const medico = await this.findOne(id);

    if (dto.especialidadId) {
      medico.especialidad = await this.especialidadesService.findOne(dto.especialidadId);
    }

    Object.assign(medico, dto);
    return await this.medicoRepository.save(medico);
  }

  async findAll(): Promise<Medico[]> {
    return await this.medicoRepository.find();
  }

  async findOne(id: number): Promise<Medico> {
    const medico = await this.medicoRepository.findOne({ where: { id } });
    if (!medico) {
      throw new NotFoundException(`Médico #${id} no encontrado`);
    }
    return medico;
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.medicoRepository.delete(id);
  }
}