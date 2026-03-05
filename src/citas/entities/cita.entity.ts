import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Paciente } from '../../pacientes/entities/paciente.entity';
import { Medico } from '../../medicos/entities/medico.entity';
import { Diagnostico } from '../../diagnosticos/entities/diagnostico.entity';

@Entity('citas')
export class Cita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime' })
  fechaCita: Date;

  @Column({ length: 255, nullable: true })
  motivo: string;

  @ManyToOne(() => Paciente, (paciente) => paciente.citas, { eager: true })
  paciente: Paciente;

  @ManyToOne(() => Medico, (medico) => medico.citas, { eager: true })
  medico: Medico;

  @OneToMany(() => Diagnostico, (diagnostico) => diagnostico.cita, { cascade: true })
  diagnosticos: Diagnostico[];
}