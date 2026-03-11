import { Repository } from 'typeorm';
import { Medico } from './entities/medico.entity';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { EspecialidadesService } from '../especialidades/especialidades.service';
export declare class MedicosService {
    private readonly medicoRepository;
    private readonly especialidadesService;
    constructor(medicoRepository: Repository<Medico>, especialidadesService: EspecialidadesService);
    create(dto: CreateMedicoDto): Promise<Medico>;
    findAll(): Promise<Medico[]>;
    findOne(id: number): Promise<Medico>;
    remove(id: number): Promise<void>;
}
