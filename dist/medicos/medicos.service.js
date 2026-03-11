"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const medico_entity_1 = require("./entities/medico.entity");
const especialidades_service_1 = require("../especialidades/especialidades.service");
let MedicosService = class MedicosService {
    medicoRepository;
    especialidadesService;
    constructor(medicoRepository, especialidadesService) {
        this.medicoRepository = medicoRepository;
        this.especialidadesService = especialidadesService;
    }
    async create(dto) {
        const especialidad = await this.especialidadesService.findOne(dto.especialidadId);
        const medico = this.medicoRepository.create({
            ...dto,
            especialidad,
        });
        return await this.medicoRepository.save(medico);
    }
    async update(id, dto) {
        const medico = await this.findOne(id);
        if (dto.especialidadId) {
            medico.especialidad = await this.especialidadesService.findOne(dto.especialidadId);
        }
        Object.assign(medico, dto);
        return await this.medicoRepository.save(medico);
    }
    async findAll() {
        return await this.medicoRepository.find();
    }
    async findOne(id) {
        const medico = await this.medicoRepository.findOne({ where: { id } });
        if (!medico) {
            throw new common_1.NotFoundException(`Médico #${id} no encontrado`);
        }
        return medico;
    }
    async remove(id) {
        await this.findOne(id);
        await this.medicoRepository.delete(id);
    }
};
exports.MedicosService = MedicosService;
exports.MedicosService = MedicosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(medico_entity_1.Medico)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        especialidades_service_1.EspecialidadesService])
], MedicosService);
//# sourceMappingURL=medicos.service.js.map