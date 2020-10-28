import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { DateColumns } from 'src/shared/classes/date-columns';
import { Role } from '../role/role.entity';

@Entity('pessoas', { synchronize: true })
export class Person extends DateColumns {

  constructor(partial?: Partial<Person>) {
    super();
    Object.assign(this, partial);
}

  @PrimaryGeneratedColumn({ name: 'id_pessoa' })
  id: number;

  @Column({ type: 'varchar', length: 255, name: 'nome', nullable: false })
  name: string;

  @Column({ type: 'enum', enum: ['F', 'J'], name: 'tipo_pessoa', nullable: false })
  personType: string;

  @Column({ type: 'varchar', length: 150, name: 'email', nullable: true, unique: true})
  email: string;

  @Column({ type: 'varchar', length: 20, name: 'telefone', nullable: true })
  telephone: string;

  @Column({ type: 'varchar', length: 20, name: 'senha', nullable: true })
  password: string;

  @Column({ type: 'boolean', nullable: false, name: 'status_ativo', default: true })
  status: boolean;

  @ManyToOne(type => Role, role => role.persons)
  @JoinColumn({ name: 'id_cargo', referencedColumnName: 'id'})
  role: Role;

}