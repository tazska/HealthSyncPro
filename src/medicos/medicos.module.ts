import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicosController } from './medicos.controller';
import { MedicosService } from './medicos.service';
import { Medico } from './entities/medico.entity';
import { EspecialidadesModule } from '../especialidades/especialidades.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Medico]),
    EspecialidadesModule, // necesario para usar EspecialidadesService
  ],
  controllers: [MedicosController],
  providers: [MedicosService],
  exports: [MedicosService], // exportamos para que CitasModule lo use
})
export class MedicosModule {}