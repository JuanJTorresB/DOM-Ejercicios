//DOM

const Titulo = document.getElementById("textoTitulo");

//1.1

const tieneClase = (obj, clase)=>{
    console.log(obj.classList.contains(clase));
};

tieneClase(Titulo,"colorRojo");

//1.2

const cuantasClases = (obj)=>{
    console.log(obj.classList.length);
};

cuantasClases(Titulo);

//1.3

const todasClases = (obj)=>{
    for (let index = 0; index < obj.classList.length; index++) {
        console.log(obj.classList.item(index));
    };
};

todasClases(Titulo);

//1.4

const tieneClase2 = (obj, clase)=>{
    console.log(obj.classList.contains(clase));
};

tieneClase2(Titulo,"colorRojo");

//1.5

const agregarClase = (obj, clases)=>{
    for (cls of clases){
        obj.classList.add(cls);
    }
    console.log(obj.classList.toString());
};

agregarClase(Titulo,["backgroundAzul","4"]);

//1.6

const eliminarClase = (obj, clase)=>{
    obj.classList.remove(clase)
    console.log(obj.classList.toString());
};

eliminarClase(Titulo,"4");

//1.7

const toggleClase = (obj, clase)=>{
    obj.classList.toggle(clase)
    console.log(obj.classList.toString());
};

toggleClase(Titulo,"5"); // Agregar
toggleClase(Titulo,"5"); // Eliminar

//1.8

const toggleClaseArg = (obj, clase, bool)=>{
    obj.classList.toggle(clase, bool)
    console.log(obj.classList.toString());
};

toggleClaseArg(Titulo,"6", true); // Agregar
toggleClaseArg(Titulo,"6", true); // Lo Mantiene Agregado

//1.9