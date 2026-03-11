import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Cita } from '../../citas/entities/cita.entity';

@Entity('diagnosticos')
export class Diagnostico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  descripcion: string;

  @Column({ length: 100, nullable: true })
  codigo: string; 
  
  @Column({ type: 'text', nullable: true })
  notas: string;

  @ManyToOne(() => Cita, (cita) => cita.diagnosticos)
  cita: Cita;
}