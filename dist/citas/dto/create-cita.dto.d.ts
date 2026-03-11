import { CreateDiagnosticoDto } from '../../diagnosticos/dto/create-diagnostico.dto';
export declare class CreateCitaDto {
    fechaCita: string;
    motivo?: string;
    pacienteId: number;
    medicoId: number;
    diagnosticos?: CreateDiagnosticoDto[];
}
