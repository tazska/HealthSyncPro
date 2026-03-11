"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const especialidades_module_1 = require("./especialidades/especialidades.module");
const medicos_module_1 = require("./medicos/medicos.module");
const pacientes_module_1 = require("./pacientes/pacientes.module");
const citas_module_1 = require("./citas/citas.module");
const diagnosticos_module_1 = require("./diagnosticos/diagnosticos.module");
const database_module_1 = require("./database/database.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            database_module_1.DatabaseModule,
            especialidades_module_1.EspecialidadesModule,
            medicos_module_1.MedicosModule,
            pacientes_module_1.PacientesModule,
            citas_module_1.CitasModule,
            diagnosticos_module_1.DiagnosticosModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map