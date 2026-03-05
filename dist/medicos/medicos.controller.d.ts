import { MedicosService } from './medicos.service';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
export declare class MedicosController {
    private readonly medicosService;
    constructor(medicosService: MedicosService);
    create(createMedicoDto: CreateMedicoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMedicoDto: UpdateMedicoDto): string;
    remove(id: string): string;
}
