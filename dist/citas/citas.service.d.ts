import { Repository } from 'typeorm';
import { Cita } from './entities/cita.entity';
import { CreateCitaDto } from './dto/create-cita.dto';
import { MedicosService } from '../medicos/medicos.service';
import { PacientesService } from '../pacientes/pacientes.service';
export declare class CitasService {
    private readonly citaRepository;
    private readonly medicosService;
    private readonly pacientesService;
    constructor(citaRepository: Repository<Cita>, medicosService: MedicosService, pacientesService: PacientesService);
    create(dto: CreateCitaDto): Promise<Cita>;
    findAll(): Promise<Cita[]>;
    findOne(id: number): Promise<Cita>;
    remove(id: number): Promise<void>;
}
