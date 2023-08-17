import dotenv from 'dotenv';
import express from 'express';

import { generarToken, validarToken } from './Middleware/tokens/tokens.js';

import storageUser from './Routes/users.js';
import storageProducto from './Routes/productos.js';
import storageInventario from './Routes/inventario.js';
import storageHistorial from './Routes/historial.js';
import storageBodegas from './Routes/bodegas.js';

dotenv.config();
let app = express()
app.use(express.json())

app.use("/generarToken", generarToken)
app.use("/user", validarToken, storageUser)
app.use("/productos", validarToken, storageProducto)
app.use("/inventario", validarToken, storageInventario)
app.use("/historial", validarToken, storageHistorial)
app.use("/bodegas", validarToken, storageBodegas)

let config = JSON.parse(process.env.MY_CONFIG)
app.listen(config, () => console.log(`http://${config.hostname}:${config.port}`))