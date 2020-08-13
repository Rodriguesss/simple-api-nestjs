import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class DateColumns {
    @CreateDateColumn({ name: 'DTCADAST', type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'DTALTERA', type: 'timestamp' })
    updatedAt: Date;
}