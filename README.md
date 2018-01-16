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

# Guardar Anuncio
Url: http://127.0.0.1:3000/twitter/anuncios
Tipo: POST
JSON: {
	"contenido": "Nuevo anuncio",
	"autor":"Rodolfo",
	"ubicacion":"Cartagena"
}

Respuesta: {
	"mensaje": "Anuncio creado con éxito.!"
}

Tipo datos: 
* contenido = String
* autor = String
* ubicacion = String

# Consultar Anuncio por Id
Url: http://127.0.0.1:3000/twitter/anuncios/:Id
Tipo: GET
JSON: Ninguno.

Respuesta:
{
    "id": 2,
    "contenido": "Nueva prueba",
    "autor": "Roque",
    "ubicacion": "Barranquilla",
    "fechaCreacion": "2018-01-16T10:09:15-05:00",
    "fechaActualizacion": ""
}

# Listar Anuncios
Url: http://127.0.0.1:3000/twitter/anuncios
Tipo: GET
JSON: Ninguno.

Respuesta: 
[
    {
        "id": 1,
        "contenido": "Nuevo anuncio",
        "autor": "Rodolfo",
        "ubicacion": "Cartagena",
        "fechaCreacion": "01/15/2018",
        "fechaActualizacion": ""
    },
    {
        "id": 2,
        "contenido": "Anuncio nuevo",
        "autor": "Carlos",
        "ubicacion": "Barranquilla",
        "fechaCreacion": "01/15/2018",
        "fechaActualizacion": ""
    }
 ]
 
# Actualizar Anuncio por Id
Url: http://127.0.0.1:3000/twitter/anuncios/:Id
Tipo: PUT
JSON: {
    "contenido": "Nuevo anuncio",
    "autor": "Rodolfo",
    "ubicacion": "Cartagena"
}

Respuesta:
{
	"mensaje": "Anuncio modificado con éxito.!"
}

# Eliminar Anuncio por Id
Url: http://127.0.0.1:3000/twitter/anuncios/:Id
Tipo: DELETE
JSON: Ninguno

Respuesta:
{
	"mensaje": "Anuncio eliminado con éxito.!"
}

