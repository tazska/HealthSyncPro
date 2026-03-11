import { Repository } from 'typeorm';
import { Paciente } from './entities/paciente.entity';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
export declare class PacientesService {
    private readonly pacienteRepository;
    constructor(pacienteRepository: Repository<Paciente>);
    create(dto: CreatePacienteDto): Promise<Paciente>;
    update(id: number, dto: UpdatePacienteDto): Promise<Paciente>;
    findAll(): Promise<Paciente[]>;
    findOne(id: number): Promise<Paciente>;
    remove(id: number): Promise<void>;
}
