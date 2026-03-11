import { Repository } from 'typeorm';
import { Diagnostico } from './entities/diagnostico.entity';
import { CreateDiagnosticoDto } from './dto/create-diagnostico.dto';
export declare class DiagnosticosService {
    private readonly diagnosticoRepository;
    constructor(diagnosticoRepository: Repository<Diagnostico>);
    create(citaId: number, dto: CreateDiagnosticoDto): Promise<Diagnostico>;
    findByCita(citaId: number): Promise<Diagnostico[]>;
    remove(id: number): Promise<void>;
}
