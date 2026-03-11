import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Diagnostico } from './entities/diagnostico.entity';
import { CreateDiagnosticoDto } from './dto/create-diagnostico.dto';

@Injectable()
export class DiagnosticosService {
  constructor(
    @InjectRepository(Diagnostico)
    private readonly diagnosticoRepository: Repository<Diagnostico>,
  ) {}

  async create(citaId: number, dto: CreateDiagnosticoDto): Promise<Diagnostico> {
    const diagnostico = this.diagnosticoRepository.create({
      ...dto,
      cita: { id: citaId },
    });
    return await this.diagnosticoRepository.save(diagnostico);
  }

  async findByCita(citaId: number): Promise<Diagnostico[]> {
    return await this.diagnosticoRepository.find({
      where: { cita: { id: citaId } },
    });
  }

  async remove(id: number): Promise<void> {
    const diagnostico = await this.diagnosticoRepository.findOne({ where: { id } });
    if (!diagnostico) {
      throw new NotFoundException(`Diagnóstico #${id} no encontrado`);
    }
    await this.diagnosticoRepository.delete(id);
  }
}