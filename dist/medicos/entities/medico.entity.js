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
exports.Medico = void 0;
const typeorm_1 = require("typeorm");
const especialidad_entity_1 = require("../../especialidades/entities/especialidad.entity");
const cita_entity_1 = require("../../citas/entities/cita.entity");
let Medico = class Medico {
    id;
    nombre;
    apellido;
    email;
    telefono;
    especialidad;
    citas;
};
exports.Medico = Medico;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Medico.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Medico.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Medico.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, unique: true }),
    __metadata("design:type", String)
], Medico.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], Medico.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => especialidad_entity_1.Especialidad, (especialidad) => especialidad.medicos, { eager: true }),
    __metadata("design:type", especialidad_entity_1.Especialidad)
], Medico.prototype, "especialidad", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cita_entity_1.Cita, (cita) => cita.medico),
    __metadata("design:type", Array)
], Medico.prototype, "citas", void 0);
exports.Medico = Medico = __decorate([
    (0, typeorm_1.Entity)('medicos')
], Medico);
//# sourceMappingURL=medico.entity.js.map