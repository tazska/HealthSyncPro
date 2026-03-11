import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateDiagnosticoDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  descripcion: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  codigo?: string;

  @IsOptional()
  @IsString()
  notas?: string;
}