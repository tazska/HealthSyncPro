import { MedicosService } from './medicos.service';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
export declare class MedicosController {
    private readonly medicosService;
    constructor(medicosService: MedicosService);
    create(dto: CreateMedicoDto): Promise<import("./entities/medico.entity").Medico>;
    update(id: number, dto: UpdateMedicoDto): Promise<import("./entities/medico.entity").Medico>;
    findAll(): Promise<import("./entities/medico.entity").Medico[]>;
    findOne(id: number): Promise<import("./entities/medico.entity").Medico>;
    remove(id: number): Promise<void>;
}
