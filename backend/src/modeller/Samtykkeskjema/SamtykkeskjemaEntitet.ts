import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ISamtykkeskjema } from './ISamtykkeskjema'
import { IsBoolean, IsDate, IsString, Length } from 'class-validator'
import { TypeSamtykkeskjema } from './TypeSamtykkeskjema'

@Entity()
export class Samtykkeskjema implements ISamtykkeskjema {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ type: 'varchar' })
    @Length(0, 40)
    @IsString()
    tittel!: string

    @Column({ type: 'varchar' })
    @Length(0, 1000)
    @IsString()
    bakgrunn!: string

    @Column({ type: 'bool', default: false })
    @IsBoolean()
    skalPubliseres!: boolean

    @Column({ type: 'varchar' })
    @Length(0, 1000)
    @IsString()
    formål!: string

    @Column({ type: 'date', nullable: true })
    @IsDate()
    startDato?: Date

    @Column({ type: 'date', nullable: true })
    @IsDate()
    sluttDato?: Date

    @Column({ type: 'varchar' })
    @Length(0, 1000)
    @IsString()
    spørreOm!: string

    @Column({ type: 'bool', default: false })
    @IsBoolean()
    harSamtykket!: boolean

    @Column({ type: 'enum', enum: TypeSamtykkeskjema })
    typeSamtykkeskjema!: TypeSamtykkeskjema
}
