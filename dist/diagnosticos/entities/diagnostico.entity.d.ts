import { Cita } from '../../citas/entities/cita.entity';
export declare class Diagnostico {
    id: number;
    descripcion: string;
    codigo: string;
    notas: string;
    cita: Cita;
}
