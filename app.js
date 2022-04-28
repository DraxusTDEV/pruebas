function suma(a, b){
    console.log(a + b);
}

//console.log(suma(5, 6));

const container = document.getElementById('container');

container.addEventListener('click', function(e){
    //const pr = e.target;
    //console.log(pr);
    prueba(e.target.id);
    suma(5, 129)
})

function prueba(envio){
    console.log("se recibió: " + envio);
    //return envio;
    if(envio == 125){
        console.log("Diste en el clavo");
    }
}