import { Expose, Transform } from 'class-transformer';

export class Users {

    @Expose({name: "ID"})
    @Transform(({value}) => {   if (value === undefined || value === null) {throw { status: 422, message: `ID is required` }}
                                if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros7 `};}, {toClassOnly: true})
    id: number;

    @Expose({name: "Name"})
    @Transform(({value}) => {   if (value === undefined || value === null) {throw { status: 422, message: `Name is required` }}
                                if(/[a-z-A-Z\s]+$/.test(value)) return value; else throw {status:400, message:`Error en los parametros6`};}, {toClassOnly:true})
    nombre: string;

    @Expose({name: "Email"})
    @Transform(({value}) =>{    if (value === undefined || value === null) {throw { status: 422, message: `Email is required` }}
                                if(/\S+@\S+\.\S+/.test(value)) return value; else throw {status: 400, message: `Error en los parametros del email`}}, {toClassOnly: true})    
    email: string;

    @Expose({name: "Status"})
    @Transform(({value}) => {   if (value === undefined || value === null) {throw { status: 422, message: `Status is required` }}
                                if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    estado: number;

    @Expose({name: "created_By"})
    @Transform(({value}) => {   if (value === undefined || value === null) {throw { status: 422, message: `created_By is required` }}
                                if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    created_by: number;

    @Expose({name: "update_By"})
    @Transform(({value}) => {   if (value === undefined || value === null) {throw { status: 422, message: `update_By is required` }}
                                if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    update_by: number;

    @Expose({name: "Photo"})
    @Transform(({value}) => {   if (value === undefined || value === null) {throw { status: 422, message: `Photo is required` }}
                                if(/^[a-z-A-Z0-9\w]+$/.test(value)) return value; else throw {status:400, message:`Error en los parametros 2`};}, {toClassOnly:true})
    foto: string;

    @Expose({name: "Password"})
    @Transform(({value}) => {   if (value === undefined || value === null) {throw { status: 422, message: `Password is required` }}                           
                                if(/^[a-z-A-Z0-9\w]+$/.test(value)) return value; else throw {status:400, message:`Error en los parametros 1`};}, {toClassOnly:true})
    password: string; 

    constructor(data:Partial<Users>){
        Object.assign(this, data)
        this.id = 0;
        this.nombre = "";
        this.email = "";
        this.estado = 0;
        this.created_by = 0;
        this.update_by = 0;
        this.foto = "";
        this.password = "";
    }
}