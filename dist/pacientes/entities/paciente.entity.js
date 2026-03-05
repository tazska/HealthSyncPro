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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
const typeorm_1 = require("typeorm");
const cita_entity_1 = require("../../citas/entities/cita.entity");
let Paciente = class Paciente {
    id;
    nombre;
    apellido;
    email;
    telefono;
    fechaNacimiento;
    citas;
};
exports.Paciente = Paciente;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Paciente.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Paciente.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Paciente.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, unique: true }),
    __metadata("design:type", String)
], Paciente.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], Paciente.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Paciente.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cita_entity_1.Cita, (cita) => cita.paciente),
    __metadata("design:type", Array)
], Paciente.prototype, "citas", void 0);
exports.Paciente = Paciente = __decorate([
    (0, typeorm_1.Entity)('pacientes')
], Paciente);
//# sourceMappingURL=paciente.entity.js.map