import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Especialidad } from '../../especialidades/entities/especialidad.entity';
import { Cita } from '../../citas/entities/cita.entity';

@Entity('medicos')
export class Medico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  apellido: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 20, nullable: true })
  telefono: string;

  @ManyToOne(() => Especialidad, (especialidad) => especialidad.medicos, { eager: true })
  especialidad: Especialidad;

  @OneToMany(() => Cita, (cita) => cita.medico)
  citas: Cita[];
}