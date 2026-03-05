import { DiagnosticosService } from './diagnosticos.service';
import { CreateDiagnosticoDto } from './dto/create-diagnostico.dto';
import { UpdateDiagnosticoDto } from './dto/update-diagnostico.dto';
export declare class DiagnosticosController {
    private readonly diagnosticosService;
    constructor(diagnosticosService: DiagnosticosService);
    create(createDiagnosticoDto: CreateDiagnosticoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDiagnosticoDto: UpdateDiagnosticoDto): string;
    remove(id: string): string;
}
