import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false, unique: false })
  chatId: number;

  @Column({ type: 'boolean', nullable: false })
  payed: boolean;

  @Column({ type: 'varchar', length: 40, nullable: true, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  name: string;

  @Column({ type: 'int', nullable: true })
  age: number;
}
