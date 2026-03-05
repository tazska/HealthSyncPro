import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EspecialidadesController } from './especialidades.controller';
import { EspecialidadesService } from './especialidades.service';
import { Especialidad } from './entities/especialidad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Especialidad])],
  controllers: [EspecialidadesController],
  providers: [EspecialidadesService],
  exports: [TypeOrmModule], // exportamos para que otros módulos puedan usarlo
})
export class EspecialidadesModule {}