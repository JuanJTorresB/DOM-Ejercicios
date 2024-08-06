//DOM

const Titulo = document.getElementById("textoTitulo");

//2.1

const nombreNodo = (obj)=>{
    console.log(obj.nodeName)
}

nombreNodo(Titulo)

//2.2

const contenidoDelDOM = (obj)=>{
    console.log(obj.textContent)
}

contenidoDelDOM(Titulo)

//2.3

const modContenidoDelDOM = (obj, newText)=>{
    obj.outerText = newText
    console.log(obj.outerText)
}

modContenidoDelDOM(Titulo, "Soy el Contenido de Prueba Modificado")

//2.4

const contenidoInnerDelDOM = (obj)=>{
    console.log(obj.innerHTML)
}

contenidoInnerDelDOM(Titulo)

//2.5

const ContenidoOuterDelDOM = (obj)=>{
    console.log(obj.outerHTML)
}

ContenidoOuterDelDOM(Titulo)

//2.6

const modContenidoSetDelDOM = (obj, str)=>{
    obj.innerHTML = str
    console.log(obj.innerHTML)
}

modContenidoSetDelDOM(Titulo, "Soy la <br> <b>Nueva Cadena<b>")