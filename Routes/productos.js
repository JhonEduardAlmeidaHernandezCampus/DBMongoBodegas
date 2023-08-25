import { Router } from "express";
import { con } from '../DB/connect.js';
import { limit } from '../Middleware/limit/limit.js';
import { validarEstructura, validarData } from "../Middleware/middlewareProductos.js";

let storageProducto = Router();
let db = await con();

storageProducto.get("/", limit(), validarEstructura, async(req, res) => {
    try {
        let tabla = db.collection("bodegas")
        let data = await tabla.aggregate([
            {
                $lookup:{
                    from: "inventarios",
                    localField: "id",
                    foreignField: "id_bodega",
                    as: "fk_bodegas_inventarios"
                }
            },
            {
                $unwind: "$fk_bodegas_inventarios"
            },
            {
                $group: {
                    _id: "$id",
                    "id": { $first: "$id" },
                    "nombre": { $first: "$nombre" },
                    "Id_responsable": { $first: "$Id_responsable" },
                    "estado": { $first: "$estado" },
                    "fk_bodegas_inventarios": { $push : "$fk_bodegas_inventarios"},
                    "Total_Productos": { $sum: "$fk_bodegas_inventarios.cantidad"}
                }
            },
            {
                $project: {
                    _id: 0,
                    "fk_bodegas_inventarios._id": 0,
                    "fk_bodegas_inventarios.id_bodega": 0,
                    "fk_bodegas_inventarios.Id_created_by": 0,
                    "fk_bodegas_inventarios.Id_update_by": 0
                }
            }
        ]).toArray();

        res.send(data)

    } catch (error) {
        res.send({status: 402, message: "Error al mostrar los datos de los productos"})
    }
})

storageProducto.post("/", limit(), validarEstructura, validarData, async(req, res) => {
    try {
        let tabla = db.collection("productos")
        let data = await tabla.insertOne(req.body);
        console.log(req.rateLimit);

        let idProducto = req.body.id // ID del producto
        let rango = parseInt(Math.random() * 100) //Cantidad del producto

        let tablaBodega = db.collection("bodegas")
        let dataBodega = await tablaBodega.find().toArray();
        let insertBodegas = dataBodega[parseInt(Math.random() * dataBodega.length)] //Numero aleatorio de bodega

        let insertInventario = db.collection("inventarios")
        await insertInventario.insertOne(
            {
                id: 15,
                id_bodega: insertBodegas.id,
                id_producto: idProducto,
                cantidad: rango,
                Id_created_by: 1,
                Id_update_by: 1,
            }
        )

        res.send({status: 200, message: "Registro creado con exito"})

    } catch (error) {
        res.send(error)
    }
})

storageProducto.put("/:id", limit(), validarEstructura, validarData, async(req, res) => {
    try {

        let parametro = req.params.id
        parametro = parseInt(parametro)

        let collection = db.collection("productos")
        let respuesta = await collection.updateOne(
            { id: parametro },
            { $set: req.body }
        )

        res.send({status: 200, message: "Registro actualizado exitosamente"})

    } catch (error) {
        res.send({status: 400, message: "" + error.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied[0].description})
    }
})


storageProducto.delete("/:id", limit(), validarEstructura, async(req, res) => {
    try {

        let parametro = req.params.id
        parametro = parseInt(parametro)

        let collection = db.collection("productos")
        let respuesta = await collection.deleteOne({ id: parametro })

        res.send({status: 200, message: "Registro eliminado exitosamente"})

    } catch (error) {
        res.send({status: 400, message: "Error al eliminar el registro"})
    }
})


export default storageProducto;