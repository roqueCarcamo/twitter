# Twitter
Sistema de avisos, donde los usuarios podrán publicar su contenido en un muro público.

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

# Consultar Anuncio por Id
Url: http://127.0.0.1:3000/twitter/anuncios/2
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
Url: http://127.0.0.1:3000/twitter/anuncios/2
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
Url: http://127.0.0.1:3000/twitter/anuncios/2
Tipo: DELETE
JSON: Ninguno

Respuesta:
{
	"mensaje": "Anuncio eliminado con éxito.!"
}

