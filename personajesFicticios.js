
class PersonajeFicticio {
    constructor(nombre, apellido, correo, genero, edad, ocupacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.genero = genero;
        this.edad = edad;
        this.ocupacion = ocupacion;
    }
}

let personajes = [];


for (let i = 0; i < 200; i++) {
    personajes.push(new PersonajeFicticio(
        faker.name.firstName(),
        faker.name.lastName(),
        faker.internet.email(),
        generarGeneroAleatorio(),
        faker.random.number({ min: 18, max: 100 }),
        faker.name.jobTitle()
    ));
}


function generarGeneroAleatorio() {
    return Math.random() < 0.5 ? 'male' : 'female';
}


/**
 * En este ejemplo, la función filtrarEdadGeneroOcupacion 
 * toma una lista de personajes 
 * y tres filtros (edad, género y ocupación). 
 * 
 * La función filtra a los personajes 
 * que cumplen con los criterios especificados.
 * 
 * Mayores o iguales de la edad, su genero y si contiene la palabra que ocupa.
 */
 
function filtrarEdadGeneroOcupacion(filtroEdad, filtroGenero, filtroOcupacion){
    return personajes.filter(personaje =>
        personaje.edad >= filtroEdad &&
        personaje.genero === filtroGenero &&
        personaje.ocupacion.includes(filtroOcupacion)
    );
}
console.log("Mayor de 30 que sea mujer y tenga un titulo de Ingeniero");
console.log(filtrarEdadGeneroOcupacion(30, 'female', 'Engineer'));
console.log(imprimePersonajes(filtrarEdadGeneroOcupacion(30, 'female', 'Engineer')));
console.log("Variable global: 'personajes' de tipo Lista [<PersonajeFicticio>] ");
console.log("Funciones:  ");
console.log("- filtrarEdadGeneroOcupacion(filtroEdad, filtroGenero, filtroOcupacion)  ");
console.log("- imprimePersonajes(lst_personaje)  ");


function imprimePersonajes(lst_personaje){
    lst_personaje.forEach(p => {
        console.log("Nombre: " + p.nombre + ", Apellido:" + p.apellido + ", Correo:" + p.correo + ", Genero:" + p.genero + ", Edad:" + p.edad + ", Ocupación:"+p.ocupacion);
    
});
}


//Encuentra todos los personajes ficticios cuya edad esté entre 18 y 25 años, y sean de género femenino.
function filtrarEdad18y25Genero(filtroEdadMin, filtroEdadMax, filtroGenero){
    return personajes.filter(personaje =>
        personaje.edad >= filtroEdadMin &&
        personaje.edad <= filtroEdadMax &&
        personaje.genero === filtroGenero
        );
}


//Encuentra todos los personajes ficticios que trabajen en alguna ocupación relacionada con "ingeniería" y tengan un correo electrónico en el dominio "@gmail.com".
function filtrarOcupacionDominioEmail(filtroOcupacion, filtroDominioEmail){
    return personajes.filter (personaje =>
        personaje.ocupacion.includes(filtroOcupacion)&&
        personaje.ocupacion.includes(filtroDominioEmail)
        );
}


//Encuentra todos los personajes ficticios cuyo nombre comience con la letra "A" y sean mayores de 30 años.
function filtrarPersonajeFicticio(filtroInicial, filtroEdad){
    return personaje.filter(personaje =>
        personaje.nombre[0] === filtroInicial &&
        personaje.edad > filtroEdad
        );
}


//Encuentra todos los personajes ficticios que trabajen en ocupaciones relacionadas con "marketing" y tengan apellidos de 6 caracteres o más.
function filtrarOcupacionApellidoMas6Caracteres(filtroOcupacion){
    return personajes.filter(p =>
        p.ocupacion.includes(filtroOcupacion) &&
        p.apellido.length > 6
        );
}


//Encuentra todos los personajes ficticios de género masculino cuya edad esté entre 40 y 60 años, y trabajen en alguna ocupación que incluya la palabra "manager" o "director".
function filtrarGeneroEdadOcupacion(filtroGenero, filtroEdadMin, filtroEdadMax, filtroOcupacion){
    return personajes.filter(p =>
        p.genero === filtroGenero &&
        p.edad >= filtroEdadMin &&
        p.edad <= filtroEdadMax &&
        p.edad.ocupacion.includes (filtroOcupacion)
        );
}