import { Medico } from '../../medicos/entities/medico.entity';
export declare class Especialidad {
    id: number;
    nombre: string;
    descripcion: string;
    medicos: Medico[];
}
