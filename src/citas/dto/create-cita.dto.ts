import { IsArray, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateDiagnosticoDto } from '../../diagnosticos/dto/create-diagnostico.dto';

export class CreateCitaDto {
  @IsNotEmpty()
  @IsDateString()
  fechaCita: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  motivo?: string;

  @IsNotEmpty()
  @IsNumber()
  pacienteId: number;

  @IsNotEmpty()
  @IsNumber()
  medicoId: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateDiagnosticoDto)
  diagnosticos?: CreateDiagnosticoDto[];
}