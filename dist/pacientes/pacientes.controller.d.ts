import { PacientesService } from './pacientes.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
export declare class PacientesController {
    private readonly pacientesService;
    constructor(pacientesService: PacientesService);
    create(dto: CreatePacienteDto): Promise<import("./entities/paciente.entity").Paciente>;
    findAll(): Promise<import("./entities/paciente.entity").Paciente[]>;
    findOne(id: number): Promise<import("./entities/paciente.entity").Paciente>;
    remove(id: number): Promise<void>;
}
