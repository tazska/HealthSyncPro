import { CitasService } from './citas.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
export declare class CitasController {
    private readonly citasService;
    constructor(citasService: CitasService);
    create(createCitaDto: CreateCitaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCitaDto: UpdateCitaDto): string;
    remove(id: string): string;
}
