import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EspecialidadesModule } from './especialidades/especialidades.module';
import { MedicosModule } from './medicos/medicos.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { CitasModule } from './citas/citas.module';
import { DiagnosticosModule } from './diagnosticos/diagnosticos.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,  
    EspecialidadesModule,
    MedicosModule,
    PacientesModule,
    CitasModule,
    DiagnosticosModule,
  ],
})
export class AppModule {}