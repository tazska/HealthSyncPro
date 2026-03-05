import { Especialidad } from '../../especialidades/entities/especialidad.entity';
import { Cita } from '../../citas/entities/cita.entity';
export declare class Medico {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    especialidad: Especialidad;
    citas: Cita[];
}
