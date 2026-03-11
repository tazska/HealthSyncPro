import { Repository } from 'typeorm';
import { Diagnostico } from './entities/diagnostico.entity';
import { CreateDiagnosticoDto } from './dto/create-diagnostico.dto';
import { UpdateDiagnosticoDto } from './dto/update-diagnostico.dto';
export declare class DiagnosticosService {
    private readonly diagnosticoRepository;
    constructor(diagnosticoRepository: Repository<Diagnostico>);
    create(citaId: number, dto: CreateDiagnosticoDto): Promise<Diagnostico>;
    findOne(id: number): Promise<Diagnostico>;
    update(id: number, dto: UpdateDiagnosticoDto): Promise<Diagnostico>;
    findByCita(citaId: number): Promise<Diagnostico[]>;
    remove(id: number): Promise<void>;
}
