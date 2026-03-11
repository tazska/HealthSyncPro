import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Patch } from '@nestjs/common';
import { DiagnosticosService } from './diagnosticos.service';
import { CreateDiagnosticoDto } from './dto/create-diagnostico.dto';
import { UpdateDiagnosticoDto } from './dto/update-diagnostico.dto';

@Controller('citas/:citaId/diagnosticos')
export class DiagnosticosController {
  constructor(private readonly diagnosticosService: DiagnosticosService) { }

  // POST /citas/1/diagnosticos
  @Post()
  create(
    @Param('citaId', ParseIntPipe) citaId: number,
    @Body() dto: CreateDiagnosticoDto,
  ) {
    return this.diagnosticosService.create(citaId, dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateDiagnosticoDto,
  ) {
    return this.diagnosticosService.update(id, dto);
  }

  @Get()
  findByCita(@Param('citaId', ParseIntPipe) citaId: number) {
    return this.diagnosticosService.findByCita(citaId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.diagnosticosService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.diagnosticosService.remove(id);
  }
}