# MongoBodegas



## MONGODB

Se crea una base de datos de inventario para bodegas 



## INSTALACIÓN

1. Para descargar Node.js ve a la siguiente página "[Download | Node.js (nodejs.org)](https://nodejs.org/en/download)".

2. Descarga la versión de Node.js correspondiente a su sistema operativo.

3. Clona este repositorio en tu máquina local.

   - https://github.com/JhonEduardAlmeidaHernandezCampus/DBMongoAlquiler.git

4. Abre una terminal en el editor de código de tu preferencia, se recomienda "Visual Studio Code".

5. Ejecuta el siguiente comando para instalar las dependencias:

   `NOTA:` Las dependencias a utilizar ya vienen dentro del proyecto, solo clone el repositorio y abra la terminal e ingrese el siguiente comando.

```
npm install;
```




## CONFIGURACIÓN

1. Asegurarse de tener creada la base de datos, si no cuentas con una base de datos, este proyecto ya trae una por defecto en la ruta `db/db.mongodb`
   - Ejecuta el script para crear la base de datos en Mongo.
2. Crea un archivo `.env` en el directorio raíz de la aplicación.
   - Define las siguientes variables de entorno:

```
MY_CONFIG = {"hostname": "127.10.10.10", "port": 5500}
MY_CONNECT = {"user": "Jhon", "password": "123", "database": "db_campus_bodegas"}
JWT_KEY = ""
```

3. Una vez instaladas las dependencias y configurado las variables de entorno, tienes que ejecutar el nodemon de la siguiente manera.

```
npm run dev
```



## GENERAR TOKEN ACCESO

Antes de empezar a utilizar las diferentes rutas y endPoints debemos generar un token de acceso a la tabla a la que vamos a consultar, que debemos colocar en nuestro header/Autorization, este token tiene un limite de 30h, en ese rango de tiempo podremos acceder a las rutas y endPoints de nuestra API.

para generar nuestro token, debemos acceder a nuestra extensión de visual estudio llamada **Thunder-Client**, colocar la siguiente ruta:

`POST:` **http://"hostname":"port"/generarToken/user**	



**PDTA:** Se genera el token a la tabla a la que vaya a hacer las consultas o métodos como POST, PUT y DELETE 

```
Tablas: {
	user,
	productos,
	inventario,
	historial,
	bodegas
}
```



```
El token generado se mostrara en la pantalla de resultado de `Thunder-Client`
```

Una vez obtenido nuestro token debemos ingresarlo en la extensión de visual estudio `Thunder-Client` ruta "Headers", una vez dentro, en la casilla de header colocar `Authorization`, y el token generado anteriormente.

- Tener en cuenta que el token solo funciona para esa tabla en especifico, si quiere hacer consultas o algún método de otra tabla, tendrá que generar un token de acceso a esa tabla y enviarlo por el `Header.`





## ENDPOINTS



### USUARIOS

#### GET: `http://"hostname":"port"/user`

Este EndPoint devuelve una lista de usuarios existentes.

```
[
    {
        ID: 1,
        Name: "Jhon Hernandez",
        Email: "jhonhernandez.campus@gmail.com",
        Status: 1,
        created_By: 1,
        update_By: 1,
        Photo: "asdsaeacassa12312rdsae4123.jpg",
        Password: "213"
    },
    ...
]
```



#### POST: `http://"hostname":"port"/user`

Este EndPoint permite agregar un usuario nuevo.

**Parámetros de entrada:**

- `ID` : ID del usuario**"Number"**.
- `Name`: Nombre del usuario**"String"**.
- `Email` : Email del usuario**"String"**.
- `Status`: Estado del registro **"Number"**.
- `created_By`: Registro creado por **"Number"**.
- `update_By`: Registro actualizado por **"Number"**.
- `Photo`: Lugar para subir una foto **"String"**.
- `Password`: Contraseña cuenta de usuario **"String"**.

**Ejemplo:**

```
{
    ID: 1,
    Name: "Jhon Hernandez",
    Email: "jhonhernandez.campus@gmail.com",
    Status: 1,
    created_By: 1,
    update_By: 1,
    Photo: "asdsaeacassa12312rdsae4123.jpg",
    Password: "213"
}
```

**`NOTA:`** Todos los campos están validados, tanto las llaves como los parámetros a enviar, si no pasa una llave o un dato como se muestra en este ejemplo, el programa le va a arrojar un error.



#### PUT: `http://"hostname":"port"/user/:ID`

Este EndPoint permite actualizar los campos de la tabla de usuarios.

**Parámetros de entrada:**

- `ID` : ID del usuario **"Number"**.
- `Name`: Nombre del cliente **"String"**.
- `Email` : Email del cliente **"String"**.
- `Status`: Estado del registro **"Number"**.
- `created_By`: Registro creado por **"Number"**.
- `update_By`: Registro actualizado por **"Number"**.
- `Photo`: Lugar para subir una foto **"String"**.
- `Password`: Contraseña cuenta de usuario **"String"**.

**Ejemplo:**

```
{
    ID: 1,
    Name: "Jhon Hernandez",
    Email: "jhonhernandez.campus@gmail.com",
    Status: 1,
    created_By: 1,
    update_By: 1,
    Photo: "asdsaeacassa12312rdsae4123.jpg",
    Password: "213"
}
```

**`NOTA:`** Todos los campos están validados, tanto las llaves como los parámetros a enviar, si no pasa una llave o un dato como se muestra en este ejemplo, el programa le va a arrojar un error.

**`IMPORTANTE`** El campo ID se pasa por el header, el campo también esta validado de que sea solo numero, en tal caso de que le pase una letra el programa le va a botar un error.



#### DELETE: `http://"hostname":"port"/user/:ID`

Este EndPoint permite eliminar el registro de la tabla de usuarios.

**Parámetros de entrada:**

- `ID` : ID del usuario que va a eliminar **"Number"**.

**`IMPORTANTE`** El campo ID se pasa por el header, el campo también esta validado de que sea solo numero, en tal caso de que le pase una letra el programa le va a botar un error.





### PRODUCTOS

#### GET: `http://"hostname":"port"/productos`

Este EndPoint devuelve una lista de productos existentes.

```
[
    {
        ID: 1,
        Name: "Manzana verde",
        Description: "Hermosa manzana verde a bajo costo",
        Status: 1,
        created_By: 1,
        update_By: 1,
    },
    ...
]
```



#### POST: `http://"hostname":"port"/productos`

Este EndPoint permite agregar un producto nuevo.

**Parámetros de entrada:**

- `ID` : ID del producto**"Number"**.
- `Name`: Nombre del producto **"String"**.
- `Description` : Descripción del producto **"String"**.
- `Status`: Estado del producto **"Number"**.
- `created_By`: Registro creado por **"Number"**.
- `update_By`: Registro actualizado por **"Number"**.

**Ejemplo:**

```
{
    ID: 1,
    Name: "Manzana verde",
    Description: "Hermosa manzana verde a bajo costo",
    Status: 1,
    created_By: 1,
    update_By: 1,
}
```

**`NOTA:`** Todos los campos están validados, tanto las llaves como los parámetros a enviar, si no pasa una llave o un dato como se muestra en este ejemplo, el programa le va a arrojar un error.



#### PUT: `http://"hostname":"port"/productos/:ID`

Este EndPoint permite actualizar los campos de la tabla de productos.

**Parámetros de entrada:**

- `ID` : ID del producto**"Number"**.
- `Name`: Nombre del producto **"String"**.
- `Description` : Descripción del producto **"String"**.
- `Status`: Estado del producto **"Number"**.
- `created_By`: Registro creado por **"Number"**.
- `update_By`: Registro actualizado por **"Number"**.

**Ejemplo:**

```
{
    ID: 1,
    Name: "Manzana verde",
    Description: "Hermosa manzana verde a bajo costo",
    Status: 1,
    created_By: 1,
    update_By: 1,
}
```

**`NOTA:`** Todos los campos están validados, tanto las llaves como los parámetros a enviar, si no pasa una llave o un dato como se muestra en este ejemplo, el programa le va a arrojar un error.

**`IMPORTANTE`** El campo ID se pasa por el header, el campo también esta validado de que sea solo numero, en tal caso de que le pase una letra el programa le va a botar un error.



#### DELETE: `http://"hostname":"port"/productos/:ID`

Este EndPoint permite eliminar el registro de la tabla de productos.

**Parámetros de entrada:**

- `ID` : ID del producto que va a eliminar **"Number"**.

**`IMPORTANTE`** El campo ID se pasa por el header, el campo también esta validado de que sea solo numero, en tal caso de que le pase una letra el programa le va a botar un error.





### INVENTARIOS

#### GET: `http://"hostname":"port"/inventario`

Este EndPoint devuelve una lista de inventarios existentes.

```
[
    {
        ID: 1,
        ID_Winery: 1,
        ID_Product: 1,
        ID_Count: 1,
        created_By: 1,
        update_By: 1,
    },
    ...
]
```



#### POST: `http://"hostname":"port"/inventario`

Este EndPoint permite agregar un inventario nuevo.

**Parámetros de entrada:**

- `ID` : ID del inventario**"Number"**.
- `ID_Winery`: ID de la bodega **"String"**.
- `ID_Product` : ID del producto **"String"**.
- `ID_Count`: Cantidad de producto **"Number"**.
- `created_By`: Registro creado por **"Number"**.
- `update_By`: Registro actualizado por **"Number"**.

**Ejemplo:**

```
{
    ID: 1,
    ID_Winery: 1,
    ID_Product: 1,
    ID_Count: 1,
    created_By: 1,
    update_By: 1,
}
```

**`NOTA:`** Todos los campos están validados, tanto las llaves como los parámetros a enviar, si no pasa una llave o un dato como se muestra en este ejemplo, el programa le va a arrojar un error.



#### PUT: `http://"hostname":"port"/inventario/:ID`

Este EndPoint permite actualizar los campos de la tabla de inventarios.

**Parámetros de entrada:**

- `ID` : ID del inventario**"Number"**.
- `ID_Winery`: ID de la bodega **"String"**.
- `ID_Product` : ID del producto **"String"**.
- `ID_Count`: Cantidad de producto **"Number"**.
- `created_By`: Registro creado por **"Number"**.
- `update_By`: Registro actualizado por **"Number"**.

**Ejemplo:**

```
{
    ID: 1,
    ID_Winery: 1,
    ID_Product: 1,
    ID_Count: 1,
    created_By: 1,
    update_By: 1,
}
```

**`NOTA:`** Todos los campos están validados, tanto las llaves como los parámetros a enviar, si no pasa una llave o un dato como se muestra en este ejemplo, el programa le va a arrojar un error.

**`IMPORTANTE`** El campo ID se pasa por el header, el campo también esta validado de que sea solo numero, en tal caso de que le pase una letra el programa le va a botar un error.



#### DELETE: `http://"hostname":"port"/inventario/:ID`

Este EndPoint permite eliminar el registro de la tabla de inventarios.

**Parámetros de entrada:**

- `ID` : ID del inventario que va a eliminar **"Number"**.

**`IMPORTANTE`** El campo ID se pasa por el header, el campo también esta validado de que sea solo numero, en tal caso de que le pase una letra el programa le va a botar un error.





### HISTORIALES

#### GET: `http://"hostname":"port"/historial`

Este EndPoint devuelve una lista de historiales existentes.

```
[
    {
        ID: 1,
        ID_Count: 1,
        ID_Winery_Origin: 1,
        ID_Winery_Destiny: 1,
        ID_Inventory: 1,
        created_By: 1,
        update_By: 1
    },
    ...
]
```



#### POST: `http://"hostname":"port"/historial`

Este EndPoint permite agregar un historial nuevo.

**Parámetros de entrada:**

- `ID` : ID del historial **"Number"**.
- `ID_Count`: Cantidad de producto **"String"**.
- `ID_Winery_Origin` : Bodega de donde sale el producto **"String"**.
- `ID_Winery_Destiny`: Bodega a la cual va a ir el producto **"Number"**.
- `ID_Inventory`: ID del inventario **"Number"**.
- `created_By`: Registro creado por **"Number"**.
- `update_By`: Registro actualizado por **"Number"**.

**Ejemplo:**

```
{
    ID: 1,
    ID_Count: 1,
    ID_Winery_Origin: 1,
    ID_Winery_Destiny: 1,
    ID_Inventory: 1,
    created_By: 1,
    update_By: 1
}
```

**`NOTA:`** Todos los campos están validados, tanto las llaves como los parámetros a enviar, si no pasa una llave o un dato como se muestra en este ejemplo, el programa le va a arrojar un error.



#### PUT: `http://"hostname":"port"/historial/:ID`

Este EndPoint permite actualizar los campos de la tabla de historiales.

**Parámetros de entrada:**

- `ID` : ID del historial **"Number"**.
- `ID_Count`: Cantidad de producto **"String"**.
- `ID_Winery_Origin` : Bodega de donde sale el producto **"String"**.
- `ID_Winery_Destiny`: Bodega a la cual va a ir el producto **"Number"**.
- `ID_Inventory`: ID del inventario **"Number"**.
- `created_By`: Registro creado por **"Number"**.
- `update_By`: Registro actualizado por **"Number"**.

**Ejemplo:**

```
{
    ID: 1,
    ID_Count: 1,
    ID_Winery_Origin: 1,
    ID_Winery_Destiny: 1,
    ID_Inventory: 1,
    created_By: 1,
    update_By: 1
}
```

**`NOTA:`** Todos los campos están validados, tanto las llaves como los parámetros a enviar, si no pasa una llave o un dato como se muestra en este ejemplo, el programa le va a arrojar un error.

**`IMPORTANTE`** El campo ID se pasa por el header, el campo también esta validado de que sea solo numero, en tal caso de que le pase una letra el programa le va a botar un error.



#### DELETE: `http://"hostname":"port"/historial/:ID`

Este EndPoint permite eliminar el registro de la tabla de historiales.

**Parámetros de entrada:**

- `ID` : ID del historial que va a eliminar **"Number"**.

**`IMPORTANTE`** El campo ID se pasa por el header, el campo también esta validado de que sea solo numero, en tal caso de que le pase una letra el programa le va a botar un error.





### BODEGAS

#### GET: `http://"hostname":"port"/bodegas`

Este EndPoint devuelve una lista de bodegas existentes.

```
[
    {
        ID: 1,
        Name: "Bodega don Jose",
        ID_Responsible: 1,
        Status: 1,
        created_By: 1,
        update_By: 1
    },
    ...
]
```



#### POST: `http://"hostname":"port"/bodegas`

Este EndPoint permite agregar una bodega nueva.

**Parámetros de entrada:**

- `ID` : ID de la bodega **"Number"**.
- `Name`: Nombre de la bodega **"String"**.
- `ID_Responsible` : ID del responsable de la bodega **"String"**.
- `Status`: Estado de la bodega **"Number"**.
- `created_By`: Registro creado por **"Number"**.
- `update_By`: Registro actualizado por **"Number"**.

**Ejemplo:**

```
{
    ID: 1,
    Name: "Bodega don Jose",
    ID_Responsible: 1,
    Status: 1,
    created_By: 1,
    update_By: 1
}
```

**`NOTA:`** Todos los campos están validados, tanto las llaves como los parámetros a enviar, si no pasa una llave o un dato como se muestra en este ejemplo, el programa le va a arrojar un error.



#### PUT: `http://"hostname":"port"/historial/:ID`

Este EndPoint permite actualizar los campos de la tabla de bodegas.

**Parámetros de entrada:**

- `ID` : ID de la bodega **"Number"**.
- `Name`: Nombre de la bodega **"String"**.
- `ID_Responsible` : ID del responsable de la bodega **"String"**.
- `Status`: Estado de la bodega **"Number"**.
- `created_By`: Registro creado por **"Number"**.
- `update_By`: Registro actualizado por **"Number"**.

**Ejemplo:**

```
{
    ID: 1,
    Name: "Bodega don Jose",
    ID_Responsible: 1,
    Status: 1,
    created_By: 1,
    update_By: 1
}
```

**`NOTA:`** Todos los campos están validados, tanto las llaves como los parámetros a enviar, si no pasa una llave o un dato como se muestra en este ejemplo, el programa le va a arrojar un error.

**`IMPORTANTE`** El campo ID se pasa por el header, el campo también esta validado de que sea solo numero, en tal caso de que le pase una letra el programa le va a botar un error.



#### DELETE: `http://"hostname":"port"/historial/:ID`

Este EndPoint permite eliminar el registro de la tabla de bodegas.

**Parámetros de entrada:**

- `ID` : ID de la bodega que va a eliminar **"Number"**.

**`IMPORTANTE`** El campo ID se pasa por el header, el campo también esta validado de que sea solo numero, en tal caso de que le pase una letra el programa le va a botar un error.





## DEPENDECIAS QUE SE IMPLEMENTARON

- "body-parser": "1.20.2",
- "class-transformer": "0.5.1",
- "class-validator": "0.14.0",
- "dotenv": "16.3.1",
- "express": "4.18.2",
- "express-rate-limit": "6.8.1",
- "jose": "4.14.4",
- "mongodb": "5.7.0",
- "nodemon": "3.0.1",
- "reflect-metadata": "0.1.13",
- "typescript": "5.1.6"

**------------------------------**

# NOTA

En tal caso de presentar algún error el código, comunicarse con el desarrollador.

`EMAIL:` [Jhonhernandez.1899@gmail.com](mailto:Jhonhernandez.1899@gmail.com)