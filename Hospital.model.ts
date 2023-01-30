import { Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    JoinColumn, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";
import { Doctores } from './doctores.model';


@Entity('Hospital',{schema:'doctorHospital'})
export class HospitalEntity{
    //columnas de la entidad 
    @PrimaryGeneratedColumn('Nombre')
    id:string;
    @CreateDateColumn({
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    
    createAT:Date;

    @UpdateDateColumn({
        name:'update_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    updateAt:Date;

    @DeleteDateColumn({
        name:'delete_at',
        type:'timestamptz',
        nullable:true,
    })

    deleteAt:Date;
    
    @OneToMany(() => Doctores, (doctor) => doctor.hospital)
    @JoinColumn({name:'doctor_id'})
    collague: Colegios;
    
    @Column('varchar',{
        name:'distrito',
        comment: 'Nombre del Hospital',
    })
    hospital:string;

    @Column('varchar',{
        name:'ubicación',
        comment:'Ubicación del hospital',
    })
    ubication:string;
 
    
    @Column('varchar',{
        name:'numero_distrito',
        comment:'Numero de telefono'
    })
    
    numberOfPhonet:string;

}
