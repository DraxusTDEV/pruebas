/*function suma(a, b){
    return "hola";
}

console.log(suma(5, 6));*/

const container = document.getElementById('container');

container.addEventListener('click', function(e){
    //const pr = e.target;
    //console.log(pr);
    prueba(e.target.id);
})

function prueba(envio){
    console.log("se recibió: " + envio);
    //return envio;
}