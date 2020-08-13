import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { DateColumns } from 'src/shared/classes/date-columns';

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

  @Column({ type: 'varchar', length: 150, name: 'email', nullable: true, unique: false })
  email: string;

  @Column({ type: 'varchar', length: 20, name: 'telefone', nullable: true })
  telephone: string;

  @Column({ type: 'boolean', nullable: false, name: 'status_ativo', default: true })
  status: boolean;

}