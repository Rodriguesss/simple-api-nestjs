import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

import { DateColumns } from 'src/shared/classes/date-columns';
import { Person } from '../person/person.entity';

@Entity('cargos')
export class Role extends DateColumns {

  @PrimaryGeneratedColumn({ name: 'id_cargo' })
  id: number;

  @Column({ type: 'varchar', length: 40, name: 'cargo', nullable: false })
  role: string;

  @Column({ type: 'varchar', length: 255, name: 'descricao', nullable: false })
  description: string;

  @OneToMany(type => Person, person => person.role)
  persons: Person[];

}
