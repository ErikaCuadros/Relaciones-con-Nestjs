import { Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";
import { HospitalEntity } from './Hospital.model';

@Entity('Hospital',{schema:'doctorHospital'})

export class Doctores{
    //columnas de la entidad 
    @PrimaryGeneratedColumn('Nombre')
    id:string;
    @CreateDateColumn({
        //objeto
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    
    createAT:Date;//atributo

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

    deleteAt:Date; //el nombre del atributo
    //Relationships
    //paramtrro de entrada =>
    @ManyToOne(() => HospitalEntity, (hospital) => hospital.doctor)
    @JoinColumn({name:'colegios_id'})
    hospital: HospitalEntity;

    @Column('varchar',{
        name:'name',
        unique:true,
        comment: 'Nombre del Doctor',
    })
    NameOfDoctor:string;

    @Column('varchar',{
        name:'direccion',
        unique:true,
        comment:'Direccion',
    })
    direction:string;
    
    @Column('varchar',{
        name:'especialidad',
        unique:true,
        comment:'Especialidad'
    })
    especialidad:string;
}