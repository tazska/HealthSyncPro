import { DiagnosticosService } from './diagnosticos.service';
import { CreateDiagnosticoDto } from './dto/create-diagnostico.dto';
import { UpdateDiagnosticoDto } from './dto/update-diagnostico.dto';
export declare class DiagnosticosController {
    private readonly diagnosticosService;
    constructor(diagnosticosService: DiagnosticosService);
    create(citaId: number, dto: CreateDiagnosticoDto): Promise<import("./entities/diagnostico.entity").Diagnostico>;
    update(id: number, dto: UpdateDiagnosticoDto): Promise<import("./entities/diagnostico.entity").Diagnostico>;
    findByCita(citaId: number): Promise<import("./entities/diagnostico.entity").Diagnostico[]>;
    findOne(id: number): Promise<import("./entities/diagnostico.entity").Diagnostico>;
    remove(id: number): Promise<void>;
}
