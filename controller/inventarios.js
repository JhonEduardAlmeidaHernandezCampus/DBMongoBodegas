var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
export class Inventarios {
    constructor(data) {
        Object.assign(this, data);
        this.id = 0;
        this.id_bodega = 0;
        this.id_bodega_destino = 0;
        this.id_producto = 0;
        this.cantidad = 0;
        this.Id_created_by = 0;
        this.Id_update_by = 0;
    }
}
__decorate([
    Expose({ name: "ID" }),
    Transform(({ value }) => {
        if (value === undefined || value === null) {
            throw { status: 422, message: `ID is required` };
        }
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: `Error en los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Inventarios.prototype, "id", void 0);
__decorate([
    Expose({ name: "ID_Winery" }),
    Transform(({ value }) => {
        if (value === undefined || value === null) {
            throw { status: 422, message: `ID_Winery is required` };
        }
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: `Error en los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Inventarios.prototype, "id_bodega", void 0);
__decorate([
    Expose({ name: "ID_Winery_Destiny" }),
    Transform(({ value }) => {
        if (value === undefined || value === null) {
            throw { status: 422, message: `ID_Winery is required` };
        }
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: `Error en los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Inventarios.prototype, "id_bodega_destino", void 0);
__decorate([
    Expose({ name: "ID_Product" }),
    Transform(({ value }) => {
        if (value === undefined || value === null) {
            throw { status: 422, message: `ID_Product is required` };
        }
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: `Error en los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Inventarios.prototype, "id_producto", void 0);
__decorate([
    Expose({ name: "Count" }),
    Transform(({ value }) => {
        if (value === undefined || value === null) {
            throw { status: 422, message: `Count is required` };
        }
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: `Error en los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Inventarios.prototype, "cantidad", void 0);
__decorate([
    Expose({ name: "created_By" }),
    Transform(({ value }) => {
        if (value === undefined || value === null) {
            throw { status: 422, message: `created_By is required` };
        }
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: `Error en los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Inventarios.prototype, "Id_created_by", void 0);
__decorate([
    Expose({ name: "update_By" }),
    Transform(({ value }) => {
        if (value === undefined || value === null) {
            throw { status: 422, message: `update_By is required` };
        }
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: `Error en los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Inventarios.prototype, "Id_update_by", void 0);
