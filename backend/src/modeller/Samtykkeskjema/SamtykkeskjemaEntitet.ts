import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ISamtykkeskjema } from './ISamtykkeskjema';
import { IsString } from 'class-validator'
@Entity()
export class Samtykkeskjema implements ISamtykkeskjema {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ type: 'varchar'})
    @IsString()
    fornavn!: string

    @Column({ type: 'varchar'})
    @IsString()
    etternavn!: string

    @Column({ type: 'varchar'})
    @IsString()
    epost!: string

    @Column({type: 'bool'})
    gittSamtykke!: boolean
}