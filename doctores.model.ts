import { Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";
import { DistritoEntity } from './distritoColegios.model';

@Entity('DistritoCO',{schema:'colegiosDistrit'})

export class Colegios{
    //columnas de la entidad 
    @PrimaryGeneratedColumn('NameCollague')
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
    @ManyToOne(() => DistritoEntity, (distrit) => distrit.collague)
    @JoinColumn({name:'colegios_id'})
    distrit: CategoryEntity;

    @Column('varchar',{
        name:'name',
        unique:true,
        comment: 'Nombre del colegio',
    })
    NameOfCollague:string;

    @Column('varchar',{
        name:'ubicación',
        unique:true,
        comment:'Ubicación del colegio',
    })
    ubicacion:string;
    
    @Column('varchar',{
        name:'typeofcollague',
        unique:true,
        comment:'Tipo de colegio'
    })
    typeOfColague:string;

}