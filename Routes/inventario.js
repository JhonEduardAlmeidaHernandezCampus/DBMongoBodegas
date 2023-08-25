import { Router } from "express";
import { con } from '../DB/connect.js';
import { limit } from '../Middleware/limit/limit.js';
import { validarEstructura, validarData } from "../Middleware/middlewareInventarios.js";

let storageInventario = Router();
let db = await con();

storageInventario.get("/", limit(), validarEstructura, async(req, res) => {
    try {
        let tabla = db.collection("inventarios")
        let data = await tabla.find().toArray();

        res.send(data)

    } catch (error) {
        res.send({status: 402, message: "Error al mostrar los datos de los inventarios"})
    }
})

storageInventario.post("/", limit(), validarEstructura, async(req, res) => {

    const {ID_Winery, ID_Product, Count } = req.body;

    try {
        let tabla = db.collection("inventarios")
        let result = await tabla.findOne({ id_bodega: ID_Winery, id_producto: ID_Product }); // Aca valido en la consulta si bodega es igual a la bodega que le estoy pasando por el body igual con producto

        let existProduct = db.collection("productos")
        let resultadoExist = await existProduct.findOne({ id: ID_Product });;
        
        if(!resultadoExist){

            res.send("Este producto no exite en la base de datos")

        } else {
            
            if (!result) {
            await tabla.insertOne(
                {
                    id: 17,
                    id_bodega: ID_Winery,
                    id_producto: ID_Product,
                    cantidad: Count,
                    Id_created_by: 1,
                    Id_update_by: 2
                }
            );

            res.send({status: 200, message: "Registro creado con exito"})

            } else {

                let newCantidad = result.cantidad + Count // Se agrega la nueva cantidad a la que ya existe en el registro

                await tabla.updateOne(
                    { id_bodega: ID_Winery, id_producto: ID_Product },
                    { $set: {cantidad: newCantidad} }
                );

                res.send({status: 200, message: "La bodega con este producto ya existe, cantidad modificada con exito"})
            }
        }

    } catch (error) {
        res.send({status: 402, message: "Error al guardar el registro"})
    }
})

storageInventario.put("/", limit(), validarEstructura, async(req, res) => {

    const {ID_Product, ID_Winery, ID_Winery_Destiny, Count} = req.body;

    try {

        let inventarios = db.collection("inventarios")
        let historiales = db.collection("historiales")
        let bodega1 = await inventarios.findOne({id_bodega: ID_Winery, id_producto: ID_Product})
        let bodega2 = await inventarios.findOne({id_bodega: ID_Winery_Destiny, id_producto: ID_Product})

        if(!bodega1){

            res.send("Este producto no exite en la bodega de origen")

        } else {
            
            if (!bodega2) {

                res.send("Este producto no exite en la bodega de destino")
                
            } else {
                
                if(bodega1.cantidad < parseInt(Count)){

                    res.send("No hay esta cantidad de producto en el inventario de esta bodega")

                } else {
                    
                    let restar = bodega1.cantidad - Count
                    let sumar = bodega2.cantidad + Count

                    await inventarios.updateOne(
                        {id_bodega: ID_Winery},
                        {$set: {cantidad: restar}} 
                    )

                    await inventarios.updateOne(
                        {id_bodega: ID_Winery_Destiny},
                        {$set: {cantidad: sumar}} 
                    )

                    await historiales.insertOne(
                        {
                            id: 4,
                            cantidad: Count,
                            id_bodega_origen: ID_Winery,
                            id_bodega_destino: ID_Winery_Destiny,
                            id_inventario: 3,
                            Id_created_by: 1,
                            Id_update_by: 1
                        }
                    )

                    res.send({status: 202, message: "Cantidad transpasada con exito y se creo el historial"})
                }
            }
        }
    } catch (error) {        
        res.send({status: 400, message: "Error al actualizar el registro"})
    }
})


storageInventario.delete("/:id", limit(), validarEstructura, async(req, res) => {
    try {

        let parametro = req.params.id
        parametro = parseInt(parametro)

        let collection = db.collection("inventarios")
        let respuesta = await collection.deleteOne({ id: parametro })

        res.send({status: 200, message: "Registro eliminado exitosamente"})

    } catch (error) {
        res.send({status: 400, message: "Error al eliminar el registro"})
    }
})


export default storageInventario;