const urlHP = 'https://jsonplaceholder.typicode.com/photos'

$("body").append("<button id='btn'>Enviar Info a la API </button>");
$.get(urlHP, (response, status) =>{
    var contador = 0;
    if(status === "success"){
        $("#btn").click(function (event) { 
            $("body").append(
            `<div class="container mx-auto"><tr>${contador+1}</tr>            
           <h1> ID: ${response[contador].id}</h1><br>
              <h4> Titulo:  ${response[contador].title} </h4><br>
            <img src="${response[contador].thumbnailUrl}"><br>
                </div>`);
            contador++;
        });
    }
} 
);