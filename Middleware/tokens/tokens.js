import 'reflect-metadata';
import { plainToClass, classToPlain } from 'class-transformer';
import dotenv from 'dotenv';
import { Router } from 'express';
import { SignJWT, jwtVerify } from 'jose';

import { Users } from '../../controller/users.js';
import { Productos } from '../../controller/productos.js';
import { Inventarios } from '../../controller/inventarios.js';
import { Historiales } from '../../controller/historiales.js';
import { Bodegas } from '../../controller/bodegas.js';

dotenv.config("../");
const generarToken = Router();
const validarToken = Router();

const Estructura = (clases) => {
    const Instancias = {
        "user": Users,
        "productos": Productos,
        "inventario": Inventarios,
        "historial": Historiales,
        "bodegas": Bodegas
    }

    const respuesta = Instancias[clases];
    if(!respuesta) throw {status: 404, message: "Error, token solicitado no valido"}
    return { atributos: plainToClass(respuesta, {}, {ignoreDecorators: true}), class: respuesta}
}

generarToken.post("/:clase", async(req, res) => {
    try {
        let insta = Estructura(req.params.clase).atributos
        const encoder = new TextEncoder();
        const jwtConstructor = new SignJWT(Object.assign({}, classToPlain(insta)));
        const jwt = await jwtConstructor
        .setProtectedHeader({alg: "HS256", typ: "JWT"})
        .setIssuedAt()
        .setExpirationTime("30h")
        .sign(encoder.encode(process.env.JWT_KEY))

        res.send({status: 201, message: jwt})

    } catch (error) {
        res.status(error.status).send(error)
    }
})

validarToken.use("/", async(req, res, next) => {
    const { authorization } = req.headers;
    if(!authorization) return res.send({status: 400, message: "Token no enviado"})
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization, 
            encoder.encode(process.env.JWT_KEY)
        );
        req.data = jwtData;
        next();

    } catch (error) {
        res.send({status: 400, message: "Token caducado"})
    }
})

export {
    generarToken,
    validarToken,
    Estructura
}