"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDiagnosticoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_diagnostico_dto_1 = require("./create-diagnostico.dto");
class UpdateDiagnosticoDto extends (0, mapped_types_1.PartialType)(create_diagnostico_dto_1.CreateDiagnosticoDto) {
}
exports.UpdateDiagnosticoDto = UpdateDiagnosticoDto;
//# sourceMappingURL=update-diagnostico.dto.js.map