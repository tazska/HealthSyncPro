import { CreateDiagnosticoDto } from './dto/create-diagnostico.dto';
import { UpdateDiagnosticoDto } from './dto/update-diagnostico.dto';
export declare class DiagnosticosService {
    create(createDiagnosticoDto: CreateDiagnosticoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDiagnosticoDto: UpdateDiagnosticoDto): string;
    remove(id: number): string;
}
