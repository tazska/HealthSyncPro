import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Medico } from '../../medicos/entities/medico.entity';

@Entity('especialidades')
export class Especialidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 255, nullable: true })
  descripcion: string;

  @OneToMany(() => Medico, (medico) => medico.especialidad)
  medicos: Medico[];
}