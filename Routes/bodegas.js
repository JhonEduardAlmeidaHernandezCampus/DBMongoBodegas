import { Router } from "express";
import { con } from '../DB/connect.js';
import { limit } from '../Middleware/limit/limit.js';
import { validarEstructura, validarData } from "../Middleware/middlewareBodegas.js";

let storageBodegas = Router();
let db = await con();

storageBodegas.get("/", limit(), validarEstructura, async(req, res) => {
    try {
        let tabla = db.collection("bodegas")
        let data = await tabla.find().toArray();

        res.send(data)

    } catch (error) {
        res.send({status: 402, message: "Error al mostrar los datos de las bodegas"})
    }
})

storageBodegas.post("/", limit(), validarEstructura, validarData, async(req, res) => {
    try {
        let tabla = db.collection("bodegas")
        let data = await tabla.insertOne(req.body);
        console.log(req.rateLimit);

        res.send({status: 200, message: "Registro creado con exito"})

    } catch (error) {
        res.send(error)
    }
})

storageBodegas.put("/:id", limit(), validarEstructura, validarData, async(req, res) => {
    try {

        let parametro = req.params.id
        parametro = parseInt(parametro)

        let collection = db.collection("bodegas")
        let respuesta = await collection.updateOne(
            { id: parametro },
            { $set: req.body }
        )

        res.send({status: 200, message: "Registro actualizado exitosamente"})

    } catch (error) {
        res.send({status: 400, message: "" + error.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied[0].description})
    }
})


storageBodegas.delete("/:id", limit(), validarEstructura, async(req, res) => {
    try {

        let parametro = req.params.id
        parametro = parseInt(parametro)

        let collection = db.collection("bodegas")
        let respuesta = await collection.deleteOne({ id: parametro })

        res.send({status: 200, message: "Registro eliminado exitosamente"})

    } catch (error) {
        res.send({status: 400, message: "Error al eliminar el registro"})
    }
})


export default storageBodegas;