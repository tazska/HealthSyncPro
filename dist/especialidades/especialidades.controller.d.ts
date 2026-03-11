import { EspecialidadesService } from './especialidades.service';
import { CreateEspecialidadeDto } from './dto/create-especialidade.dto';
export declare class EspecialidadesController {
    private readonly especialidadesService;
    constructor(especialidadesService: EspecialidadesService);
    create(dto: CreateEspecialidadeDto): Promise<import("./entities/especialidad.entity").Especialidad>;
    findAll(): Promise<import("./entities/especialidad.entity").Especialidad[]>;
    findOne(id: number): Promise<import("./entities/especialidad.entity").Especialidad>;
    remove(id: number): Promise<void>;
}
