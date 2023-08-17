import { Expose, Transform } from 'class-transformer';

export class Productos {

    @Expose({name: "ID"})
    @Transform(({value}) => {   if (value === undefined || value === null) {throw { status: 422, message: `ID is required` }}
                                if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id: number;

    @Expose({name: "Name"})
    @Transform(({value}) => {   if (value === undefined || value === null) {throw { status: 422, message: `Name is required` }}
                                if(/[a-z-A-Z\s]+$/.test(value)) return value; else throw {status:400, message:`Error en los parametros`};}, {toClassOnly:true})
    nombre: string;

    @Expose({name: "Description"})
    @Transform(({value}) =>{    if (value === undefined || value === null) {throw { status: 422, message: `Description is required` }}
                                if(/[a-z-A-Z0-9\s]+$/.test(value)) return value; else throw {status: 400, message: `Error en los parametros 1`}}, {toClassOnly: true})    
    descripcion: string;

    @Expose({name: "Status"})
    @Transform(({value}) => {   if (value === undefined || value === null) {throw { status: 422, message: `Status is required` }}
                                if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    estado: number;

    @Expose({name: "created_By"})
    @Transform(({value}) => {   if (value === undefined || value === null) {throw { status: 422, message: `created_By is required` }}
                                if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    Id_created_by: number;

    @Expose({name: "update_By"})
    @Transform(({value}) => {   if (value === undefined || value === null) {throw { status: 422, message: `update_By is required` }}
                                if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    Id_update_by: number;

    constructor(data:Partial<Productos>){
        Object.assign(this, data)
        this.id = 0;
        this.nombre = "";
        this.descripcion = "";
        this.estado = 0;
        this.Id_created_by = 0;
        this.Id_update_by = 0;
    }
}