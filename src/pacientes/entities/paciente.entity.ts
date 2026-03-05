import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cita } from '../../citas/entities/cita.entity';

@Entity('pacientes')
export class Paciente {
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

  @Column({ type: 'date', nullable: true })
  fechaNacimiento: Date;

  @OneToMany(() => Cita, (cita) => cita.paciente)
  citas: Cita[];
}