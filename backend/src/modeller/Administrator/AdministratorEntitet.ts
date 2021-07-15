import { IAdministrator } from './IAdministrator'
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { IsString } from 'class-validator'
import { Samtykkeskjema } from '../Samtykkeskjema/SamtykkeskjemaEntitet'

@Entity()
export class Administrator implements IAdministrator {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ type: 'varchar' })
    @IsString()
    fornavn!: string

    @Column({ type: 'varchar' })
    @IsString()
    etternavn!: string

    @Column({ type: 'varchar' })
    @IsString()
    team!: string

    @Column({ type: 'varchar' })
    @IsString()
    produktområde!: string

    @Column({ type: 'varchar' })
    @IsString()
    avdeling!: string

    @Column({ type: 'varchar' })
    @IsString()
    telefon!: string

    @Column({ type: 'varchar' })
    @IsString()
    epost!: string

    @OneToMany(() => Samtykkeskjema, (samtykkeskjema) => samtykkeskjema.administrator)
    samtykkeskjemaer!: Samtykkeskjema[]
}
