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
exports.DiagnosticosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const diagnostico_entity_1 = require("./entities/diagnostico.entity");
let DiagnosticosService = class DiagnosticosService {
    diagnosticoRepository;
    constructor(diagnosticoRepository) {
        this.diagnosticoRepository = diagnosticoRepository;
    }
    async create(citaId, dto) {
        const diagnostico = this.diagnosticoRepository.create({
            ...dto,
            cita: { id: citaId },
        });
        return await this.diagnosticoRepository.save(diagnostico);
    }
    async findOne(id) {
        const diagnostico = await this.diagnosticoRepository.findOne({ where: { id } });
        if (!diagnostico) {
            throw new common_1.NotFoundException(`Diagnóstico #${id} no encontrado`);
        }
        return diagnostico;
    }
    async update(id, dto) {
        const diagnostico = await this.diagnosticoRepository.findOne({ where: { id } });
        if (!diagnostico) {
            throw new common_1.NotFoundException(`Diagnóstico #${id} no encontrado`);
        }
        Object.assign(diagnostico, dto);
        return await this.diagnosticoRepository.save(diagnostico);
    }
    async findByCita(citaId) {
        return await this.diagnosticoRepository.find({
            where: { cita: { id: citaId } },
        });
    }
    async remove(id) {
        const diagnostico = await this.diagnosticoRepository.findOne({ where: { id } });
        if (!diagnostico) {
            throw new common_1.NotFoundException(`Diagnóstico #${id} no encontrado`);
        }
        await this.diagnosticoRepository.delete(id);
    }
};
exports.DiagnosticosService = DiagnosticosService;
exports.DiagnosticosService = DiagnosticosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(diagnostico_entity_1.Diagnostico)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DiagnosticosService);
//# sourceMappingURL=diagnosticos.service.js.map