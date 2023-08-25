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
export class Historiales {
    constructor(data) {
        Object.assign(this, data);
        this.id = 0;
        this.cantidad = 0;
        this.id_bodega_origen = 0;
        this.id_bodega_destino = 0;
        this.id_inventario = 0;
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
            throw { status: 400, message: `Error en los parametros7 ` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Historiales.prototype, "id", void 0);
__decorate([
    Expose({ name: "ID_Count" }),
    Transform(({ value }) => {
        if (value === undefined || value === null) {
            throw { status: 422, message: `ID_Count is required` };
        }
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: `Error en los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Historiales.prototype, "cantidad", void 0);
__decorate([
    Expose({ name: "ID_Winery_Origin" }),
    Transform(({ value }) => {
        if (value === undefined || value === null) {
            throw { status: 422, message: `ID_Winery_Origin is required` };
        }
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: `Error en los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Historiales.prototype, "id_bodega_origen", void 0);
__decorate([
    Expose({ name: "ID_Winery_Destiny" }),
    Transform(({ value }) => {
        if (value === undefined || value === null) {
            throw { status: 422, message: `ID_Winery_Destiny is required` };
        }
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: `Error en los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Historiales.prototype, "id_bodega_destino", void 0);
__decorate([
    Expose({ name: "ID_Inventory" }),
    Transform(({ value }) => {
        if (value === undefined || value === null) {
            throw { status: 422, message: `ID_Inventory is required` };
        }
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: `Error en los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Historiales.prototype, "id_inventario", void 0);
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
], Historiales.prototype, "Id_created_by", void 0);
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
], Historiales.prototype, "Id_update_by", void 0);
