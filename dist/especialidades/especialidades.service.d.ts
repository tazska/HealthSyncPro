import { Repository } from 'typeorm';
import { Especialidad } from './entities/especialidad.entity';
import { CreateEspecialidadeDto } from './dto/create-especialidade.dto';
export declare class EspecialidadesService {
    private readonly especialidadRepository;
    constructor(especialidadRepository: Repository<Especialidad>);
    create(dto: CreateEspecialidadeDto): Promise<Especialidad>;
    findAll(): Promise<Especialidad[]>;
    findOne(id: number): Promise<Especialidad>;
    remove(id: number): Promise<void>;
}
