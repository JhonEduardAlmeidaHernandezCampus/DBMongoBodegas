import { Expose, Transform } from 'class-transformer';

export class Inventarios {

    @Expose({name: "ID"})
    @Transform(({value}) => {   if (value === undefined || value === null) {throw { status: 422, message: `ID is required` }}
                                if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id: number;

    @Expose({name: "ID_Winery"})
    @Transform(({value}) => {   if (value === undefined || value === null) {throw { status: 422, message: `ID_Winery is required` }}
                                if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_bodega: number;

    @Expose({name: "ID_Winery_Destiny"})
    @Transform(({value}) => {   if (value === undefined || value === null) {throw { status: 422, message: `ID_Winery is required` }}
                                if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_bodega_destino: number;

    @Expose({name: "ID_Product"})
    @Transform(({value}) => {   if (value === undefined || value === null) {throw { status: 422, message: `ID_Product is required` }}
                                if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    id_producto: number;

    @Expose({name: "Count"})
    @Transform(({value}) => {   if (value === undefined || value === null) {throw { status: 422, message: `Count is required` }}
                                if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    cantidad: number;

    @Expose({name: "created_By"})
    @Transform(({value}) => {   if (value === undefined || value === null) {throw { status: 422, message: `created_By is required` }}
                                if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    Id_created_by: number;

    @Expose({name: "update_By"})
    @Transform(({value}) => {   if (value === undefined || value === null) {throw { status: 422, message: `update_By is required` }}
                                if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {status: 400, message: `Error en los parametros`};}, {toClassOnly: true})
    Id_update_by: number;

    constructor(data:Partial<Inventarios>){
        Object.assign(this, data)
        this.id = 0;
        this.id_bodega = 0;
        this.id_bodega_destino = 0;
        this.id_producto = 0;
        this.cantidad = 0;
        this.Id_created_by = 0;
        this.Id_update_by = 0;
    }
}