import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { DiagnosticosService } from './diagnosticos.service';
import { CreateDiagnosticoDto } from './dto/create-diagnostico.dto';

@Controller('citas/:citaId/diagnosticos')
export class DiagnosticosController {
  constructor(private readonly diagnosticosService: DiagnosticosService) {}

  // POST /citas/1/diagnosticos
  @Post()
  create(
    @Param('citaId', ParseIntPipe) citaId: number,
    @Body() dto: CreateDiagnosticoDto,
  ) {
    return this.diagnosticosService.create(citaId, dto);
  }

  // GET /citas/1/diagnosticos
  @Get()
  findByCita(@Param('citaId', ParseIntPipe) citaId: number) {
    return this.diagnosticosService.findByCita(citaId);
  }

  // DELETE /citas/1/diagnosticos/2
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.diagnosticosService.remove(id);
  }
}