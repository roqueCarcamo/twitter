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



