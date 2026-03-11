import { CitasService } from './citas.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
export declare class CitasController {
    private readonly citasService;
    constructor(citasService: CitasService);
    create(dto: CreateCitaDto): Promise<import("./entities/cita.entity").Cita>;
    update(id: number, dto: UpdateCitaDto): Promise<import("./entities/cita.entity").Cita>;
    findAll(): Promise<import("./entities/cita.entity").Cita[]>;
    findOne(id: number): Promise<import("./entities/cita.entity").Cita>;
    remove(id: number): Promise<void>;
}
