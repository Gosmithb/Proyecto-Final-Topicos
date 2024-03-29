import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import{Consumo} from "./consumo.entity"

@Entity()
export class Cliente{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    nombre : string;

    @Column()
    correo : string;

    @Column()
    telefono : string;

    @Column()
    domicilio : string;

    @Column({type: 'date', default: null})
    fecha_nacimiento : Date;

    @OneToMany(()=> Consumo, (consumo) => consumo.id_cliente) 
    consumo: Consumo[];

}