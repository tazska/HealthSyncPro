import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from './entities/paciente.entity';
import { CreatePacienteDto } from './dto/create-paciente.dto';

@Injectable()
export class PacientesService {
  constructor(
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>,
  ) {}

  async create(dto: CreatePacienteDto): Promise<Paciente> {
    const paciente = this.pacienteRepository.create(dto);
    return await this.pacienteRepository.save(paciente);
  }

  async findAll(): Promise<Paciente[]> {
    return await this.pacienteRepository.find();
  }

  async findOne(id: number): Promise<Paciente> {
    const paciente = await this.pacienteRepository.findOne({ where: { id } });
    if (!paciente) {
      throw new NotFoundException(`Paciente #${id} no encontrado`);
    }
    return paciente;
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.pacienteRepository.delete(id);
  }
}