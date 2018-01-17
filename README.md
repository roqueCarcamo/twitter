# Twitter
Sistema de avisos, donde los usuarios podrán publicar su contenido en un muro público.

# Requsitos
node js ^8.x.x

# Instalador 
Clonar el repositorio : 
git clone https://github.com/roqueCarcamo/twitter.git

# Instalar las dependencias
npm install
 
# Depencias
* "body-parser": "^1.18.2",
* "express": "^4.16.2",
* "moment": "^2.20.1",
* "morgan": "^1.9.0",
* "winston": "^2.4.0"

# Correr el proyecto
node index.js 

# Formatos JSON
* Content-Type : application/json


# Guardar Anuncio
*Url: http://127.0.0.1:3000/twitter/anuncios

*Tipo: POST

*JSON: {
	"contenido": "Nuevo anuncio",
	"autor":"Rodolfo",
	"ubicacion":"Cartagena"
}

*Codigo : 201

* Respuesta Json: {
	"mensaje": "Anuncio creado con éxito.!"
}

Tipo datos: 
* contenido = String (Requerido)
* autor = String (Requerido)
* ubicacion = String (Requerido)

# Consultar Anuncio por Id
*Url: http://127.0.0.1:3000/twitter/anuncios/:Id

*Tipo: GET

*JSON: Ninguno.

:Id = Id del anuncio creado. (Requerido)

*Codigo : 200

* Respuesta Json:
{
    "id": 2,
    "contenido": "Nueva prueba",
    "autor": "Roque",
    "ubicacion": "Barranquilla",
    "fechaCreacion": "2018-01-16T10:09:15-05:00",
    "fechaActualizacion": ""
}

# Listar Anuncios
*Url: http://127.0.0.1:3000/twitter/anuncios

*Tipo: GET

*JSON: Ninguno.

*Codigo : 200

* Respuesta Json:
[
    {
        "id": 1,
        "contenido": "Primer anuncio",
        "autor": "Luis Mesa",
        "ubicacion": "Barranquilla",
        "fechaCreacion": "2018-01-16T10:09:15-05:00",
        "fechaActualizacion": "2018-01-16T10:09:40-05:00"
    },
    {
        "id": 2,
        "contenido": "Segundo anuncio",
        "autor": "Pedro Mesa",
        "ubicacion": "Cartagena",
        "fechaCreacion": "2018-02-16T10:09:20-05:00",
        "fechaActualizacion": "2018-03-16T10:09:40-05:00"
    }
]
 
# Modificar Anuncio por Id
*Url: http://127.0.0.1:3000/twitter/anuncios/:Id

*Tipo: PUT

*JSON: {
    "contenido": "Nuevo anuncio modificado",
    "autor": "Pablo",
    "ubicacion": "Sincelejo"
}

:Id = Id del anuncio creado. (Requerido)

*Codigo : 200

* Respuesta Json:
{
	"mensaje": "Anuncio modificado con éxito.!"
}

# Eliminar Anuncio por Id
*Url: http://127.0.0.1:3000/twitter/anuncios/:Id

*Tipo: DELETE

*JSON: Ninguno

:Id = Id del anuncio creado. (Requerido)

*Codigo : 200

* Respuesta Json:
{
	"mensaje": "Anuncio eliminado con éxito.!"
}

# Advertencias

* Cuando no se envian los parametros requeridos (Codigo : 406)

Respuesta Json:
{
    "mensaje": "Los siguientes campos son requeridos",
    "datos": [
        "contenido"
    ]
}

* Cuando se exceden el tamaño de caracteres permitidos (Codigo : 406)

Respuesta Json:
{
    "mensaje": "Los siguientes campos exceden el tamaño permitido",
    "datos": [
        "autor, Máximo 32 caracteres"
    ]
}

* Cuando no se encuentra un id de anuncio (Codigo : 404)

Respuesta Json:
{
    "mensaje": "El id del anuncio no fue encontrado.!"
}

# Errores
* Cuando se utiliza una url de un servicio no existente (Codigo : 404)

Respuesta Json: 
{
    "error": "Error. Servicio no encontrado"
}

* Errores internos en el servidor (Codigo : 500)

Respuesta Json:
{
    "error": Tipo error
}

Autor: Rodolfo Roque Cárcamo Mesa

