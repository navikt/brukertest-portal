import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ISamtykkeskjema } from './ISamtykkeskjema'
import { IsBoolean, IsDate, IsDateString, IsString, Length } from 'class-validator'
import { TypeSamtykkeskjema } from './TypeSamtykkeskjema'

@Entity()
export class Samtykkeskjema implements ISamtykkeskjema {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ type: 'varchar' })
    @Length(1, 40)
    @IsString()
    tittel!: string

    @Column({ type: 'varchar' })
    @Length(1, 1000)
    @IsString()
    bakgrunn!: string

    @Column({ type: 'bool', default: false })
    @IsBoolean()
    skalPubliseres!: boolean

    @Column({ type: 'varchar' })
    @Length(1, 1000)
    @IsString()
    formål!: string

    @Column({ type: 'date', nullable: true })
    startDato?: Date

    @Column({ type: 'date', nullable: true })
    sluttDato?: Date

    @Column({ type: 'varchar' })
    @Length(1, 1000)
    @IsString()
    spørreOm!: string

    @Column({ type: 'bool', default: false })
    @IsBoolean()
    harSamtykket!: boolean

    @Column({ type: 'enum', enum: TypeSamtykkeskjema })
    typeSamtykkeskjema!: TypeSamtykkeskjema
}
