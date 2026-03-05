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
exports.DiagnosticosController = void 0;
const common_1 = require("@nestjs/common");
const diagnosticos_service_1 = require("./diagnosticos.service");
const create_diagnostico_dto_1 = require("./dto/create-diagnostico.dto");
const update_diagnostico_dto_1 = require("./dto/update-diagnostico.dto");
let DiagnosticosController = class DiagnosticosController {
    diagnosticosService;
    constructor(diagnosticosService) {
        this.diagnosticosService = diagnosticosService;
    }
    create(createDiagnosticoDto) {
        return this.diagnosticosService.create(createDiagnosticoDto);
    }
    findAll() {
        return this.diagnosticosService.findAll();
    }
    findOne(id) {
        return this.diagnosticosService.findOne(+id);
    }
    update(id, updateDiagnosticoDto) {
        return this.diagnosticosService.update(+id, updateDiagnosticoDto);
    }
    remove(id) {
        return this.diagnosticosService.remove(+id);
    }
};
exports.DiagnosticosController = DiagnosticosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_diagnostico_dto_1.CreateDiagnosticoDto]),
    __metadata("design:returntype", void 0)
], DiagnosticosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DiagnosticosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiagnosticosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_diagnostico_dto_1.UpdateDiagnosticoDto]),
    __metadata("design:returntype", void 0)
], DiagnosticosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiagnosticosController.prototype, "remove", null);
exports.DiagnosticosController = DiagnosticosController = __decorate([
    (0, common_1.Controller)('diagnosticos'),
    __metadata("design:paramtypes", [diagnosticos_service_1.DiagnosticosService])
], DiagnosticosController);
//# sourceMappingURL=diagnosticos.controller.js.map