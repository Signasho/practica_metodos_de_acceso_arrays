let number = [1,5,20,23]
console.log(number.sort())

let pokemon = ["Charizard", "Charmeleon", "Charmander"];
console.log(pokemon.reverse())

let clientes = [
    {nombre: 'Juan', edad: 28},
    {nombre: 'Carlos', edad: 22},
    {nombre: 'Karla', edad: 27},
]

let nombresClientes = [];

clientes.forEach(function(cliente){
    nombresClientes.push(cliente.nombre);
})

console.log(nombresClientes.sort());


let productos = [
    {nombre: 'coca-cola', precio: 990},
    {nombre: 'papas fritas', precio: 590},
    {nombre: 'ramitas', precio: 290},
    {nombre: 'kapo', precio: 190},

];

let kapo = productos.find(function(producto){
    return producto.nombre == 'kapo'
});

console.log(kapo)

let precioEspecifico = productos.find(function(producto){
    return producto.precio == 290
});
console.log(precioEspecifico)

let personas = ["pedro", "juan", "diego"];

let juanIndice = personas.findIndex(function(persona){
    return persona == 'juan';
})

console.log(juanIndice)


let autos = [
    {marca: 'Toyota', modelo: 'Corolla', combustible: 'Gasolina'},
    {marca: 'Mazda', modelo: '3', combustible: 'Gasolina'},
    {marca: 'Honda', modelo: 'Civic', combustible: 'Gasolina'},
    {marca: 'Bmw', modelo: '116d', combustible: 'Diesel'}
]

let algunDiesel = autos.some(function(auto){
    return auto.combustible == 'Diesel'
});
console.log(algunDiesel)

let numeros = [1,2,3,4,5,6,7];

let algunMenorTres = numeros.some(function(num){
    return num < 3
});

console.log(algunMenorTres)


let cursos = [ {nombre: "Javascript"}, { nombre: "Python"}]

let [ primerCurso, segundoCurso ] = cursos

let {nombre} = segundoCurso
console.log(nombre)

