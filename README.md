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

# Guardar Usuario
*Url: http://127.0.0.1:8080/twitter/users

*Tipo: POST

*JSON: {
	"firstname": "Rodolfo",
	"lastname":"Roque",
	"email":"carcamomesa@gmail.com"
}

*Codigo : 201

* Respuesta Json: {
	"mensaje": "Usuario creado con éxito.!"
}

Tipo datos: 
* firstname = String (Requerido)
* lastname = String (Requerido)
* email = String (Requerido)

# Consultar Usuario por Id
*Url: http://127.0.0.1:8080/twitter/users/:Id

*Tipo: GET

*JSON: Ninguno.

:Id = Id del usuario creado. (Requerido)

*Codigo : 200

* Respuesta Json:
{
    "firstname": "Nueva prueba",
    "lastname": "Roque",
    "email": "Barranquilla",
    "fechaCreacion": "2018-01-16T10:09:15-05:00",
    "fechaActualizacion": ""
}

# Listar Usuarios
*Url: http://127.0.0.1:8080/twitter/users

*Tipo: GET

*JSON: Ninguno.

*Codigo : 200

* Respuesta Json:
{
    "users": [
        {
            "status": true,
            "_id": "5a641a7fe8bcb529ac475562",
            "firstname": "Rodolfo",
            "lastname": "Roque",
            "email": "carcamomesa@gmail.com",
            "createdAt": "2018-01-21T04:43:43.634Z",
            "updatedAt": "2018-01-21T04:43:43.634Z",
            "__v": 0
        },
        {
            "status": true,
            "_id": "5a641e9fe39bb92ad8ace6b6",
            "firstname": "Rodolfo",
            "lastname": "Roque",
            "email": "carcamomesa@gmail.com",
            "createdAt": "2018-01-21T05:01:19.956Z",
            "updatedAt": "2018-01-21T05:01:19.956Z",
            "__v": 0
        }
    ],
    "limit": 10,
    "skip": 0
}]
 
# Modificar Usuario por Id
*Url: http://127.0.0.1:8080/twitter/users/:Id

*Tipo: PUT

*JSON: {
    "firstname": "Pablo",
    "lastname": "Meza",
    "email": "pablomeza@gmail.com"
}

:Id = Id del usuario creado. (Requerido)

*Codigo : 200

* Respuesta Json:
{
	"mensaje": "Usuario modificado con éxito.!"
}

# Eliminar Usuario por Id (Deshabilitar)
*Url: http://127.0.0.1:8080/twitter/users/:Id

*Tipo: DELETE

*JSON: Ninguno

:Id = Id del usuario creado. (Requerido)

*Codigo : 200

* Respuesta Json:
{
	"mensaje": "Usuario deshabilitado con éxito.!"
}


# Guardar Anuncio
*Url: http://127.0.0.1:8080/twitter/tweets

*Tipo: POST

*JSON: {
	"content": "Nuevo anuncio",
	"author":"Rodolfo",
	"location":"Cartagena"
}

*Codigo : 201

* Respuesta Json: {
	"mensaje": "Anuncio creado con éxito.!"
}

Tipo datos: 
* content = String (Requerido)
* author = String (Requerido)
* location = String (Requerido)

# Consultar Anuncio por Id
*Url: http://127.0.0.1:8080/twitter/tweets/:Id

*Tipo: GET

*JSON: Ninguno.

:Id = Id del anuncio creado. (Requerido)

*Codigo : 200

* Respuesta Json:
{
    "content": "Nueva prueba",
    "author": "Roque",
    "location": "Barranquilla",
    "fechaCreacion": "2018-01-16T10:09:15-05:00",
    "fechaActualizacion": ""
}

# Listar Anuncios
*Url: http://127.0.0.1:8080/twitter/tweets

*Tipo: GET

*JSON: Ninguno.

*Codigo : 200

* Respuesta Json:
[
    {
        "id": 1,
        "content": "Primer anuncio",
        "author": "Luis Mesa",
        "location": "Barranquilla",
        "fechaCreacion": "2018-01-16T10:09:15-05:00",
        "fechaActualizacion": "2018-01-16T10:09:40-05:00"
    },
    {
        "id": 2,
        "content": "Segundo anuncio",
        "author": "Pedro Mesa",
        "location": "Cartagena",
        "fechaCreacion": "2018-02-16T10:09:20-05:00",
        "fechaActualizacion": "2018-03-16T10:09:40-05:00"
    }
]
 
# Modificar Anuncio por Id
*Url: http://127.0.0.1:8080/twitter/tweets/:Id

*Tipo: PUT

*JSON: {
    "content": "Nuevo anuncio modificado",
    "author": "Pablo",
    "location": "Sincelejo"
}

:Id = Id del anuncio creado. (Requerido)

*Codigo : 200

* Respuesta Json:
{
	"mensaje": "Anuncio modificado con éxito.!"
}

# Eliminar Anuncio por Id
*Url: http://127.0.0.1:8080/twitter/tweets/:Id

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
        "content"
    ]
}

* Cuando se exceden el tamaño de caracteres permitidos (Codigo : 406)

Respuesta Json:
{
    "mensaje": "Los siguientes campos exceden el tamaño permitido",
    "datos": [
        "author, Máximo 32 caracteres"
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

