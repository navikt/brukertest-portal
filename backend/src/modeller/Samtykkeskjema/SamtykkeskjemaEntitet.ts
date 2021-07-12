import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ISamtykkeskjema } from './ISamtykkeskjema'
import { IsString } from 'class-validator'
import { TypeSamtykkeskjema } from './TypeSamtykkeskjema'
import { Exclude } from 'class-transformer'
@Entity()
export class Samtykkeskjema implements ISamtykkeskjema {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ type: 'varchar' })
    tittel!: string

    @Column({ type: 'varchar' })
    bakgrunn!: string

    @Column({ type: 'bool' })
    skalPubliseres!: boolean

    @Column({ type: 'varchar' })
    formål!: string

    @Exclude()
    startDato?: Date

    @Exclude()
    sluttDato?: Date

    @Column({ type: 'varchar' })
    spørreOm!: string

    @Column({ type: 'bool', default: false })
    harSamtykket!: boolean

    @Column({ type: 'enum', enum: TypeSamtykkeskjema })
    typeSamtykkeskjema!: TypeSamtykkeskjema
}
