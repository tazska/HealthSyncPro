import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Especialidad } from './entities/especialidad.entity';
import { CreateEspecialidadeDto } from './dto/create-especialidade.dto';
import { UpdateEspecialidadDto } from './dto/update-especialidade.dto';

@Injectable()
export class EspecialidadesService {
  constructor(
    @InjectRepository(Especialidad)
    private readonly especialidadRepository: Repository<Especialidad>,
  ) { }

  async create(dto: CreateEspecialidadeDto): Promise<Especialidad> {
    const especialidad = this.especialidadRepository.create(dto);
    return await this.especialidadRepository.save(especialidad);
  }

  async update(id: number, dto: UpdateEspecialidadDto): Promise<Especialidad> {
    const especialidad = await this.findOne(id);
    Object.assign(especialidad, dto);
    return await this.especialidadRepository.save(especialidad);
  }

  async findAll(): Promise<Especialidad[]> {
    return await this.especialidadRepository.find();
  }

  async findOne(id: number): Promise<Especialidad> {
    const especialidad = await this.especialidadRepository.findOne({ where: { id } });
    if (!especialidad) {
      throw new NotFoundException(`Especialidad #${id} no encontrada`);
    }
    return especialidad;
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.especialidadRepository.delete(id);
  }
}