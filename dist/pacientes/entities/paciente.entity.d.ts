import { Cita } from '../../citas/entities/cita.entity';
export declare class Paciente {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    fechaNacimiento: Date;
    citas: Cita[];
}
