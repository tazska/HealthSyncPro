import { Paciente } from '../../pacientes/entities/paciente.entity';
import { Medico } from '../../medicos/entities/medico.entity';
import { Diagnostico } from '../../diagnosticos/entities/diagnostico.entity';
export declare class Cita {
    id: number;
    fechaCita: Date;
    motivo: string;
    paciente: Paciente;
    medico: Medico;
    diagnosticos: Diagnostico[];
}
