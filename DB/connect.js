import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config("../")
let conexion = JSON.parse(process.env.MY_CONNECT)

export async function con(){
    try {
        const uri = `mongodb+srv://${conexion.user}:${conexion.password}@cluster0.rpldcx9.mongodb.net/${conexion.database}`
        const option = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        const client = await MongoClient.connect(uri, option)
        return client.db();

    } catch (error) {
        return {status: 500, message: error}
    }
}   