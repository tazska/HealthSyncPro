import { PartialType } from '@nestjs/mapped-types';
import { CreateEspecialidadeDto } from './create-especialidade.dto';

export class UpdateEspecialidadDto extends PartialType(CreateEspecialidadeDto) {}
