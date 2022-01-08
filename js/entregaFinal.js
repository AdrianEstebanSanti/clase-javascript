
// START EVENTO CLICK PARA AGREGAR ITEMS DE LAS CARD
const addToShoppingCartButtons = document.querySelectorAll('.card');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});
// END EVENTO CLICK PARA AGREGAR ITEMS DE LAS CARD


//   JQUERY 
  const shoppingCartItemsContainer = $('.shoppingCartItemsContainer');

// ARRAY CARRO
let carro = []; 


//START FUNCION QUE RECIBE EL EVENTO CLICK DE LOS ITEMS SELECCIONADOS 
function addToCartClicked(event) {
    const button = event.target;
    const card = button.closest('.card');

    const cardTitle = card.querySelector('.card-title').textContent;
    const cardPrice = card.querySelector('.card-price').textContent;
    const cardImage = card.querySelector('.card-img-top').src;

    const newItem = {
        title: cardTitle,
        price: cardPrice,
        img: cardImage,
        cantidad: 1
    };

    addItemLocal(newItem);
    addCardToShoppingCart(cardTitle, cardPrice, cardImage);
};
//END FUNCION QUE RECIBE EL EVENTO CLICK DE LOS ITEMS SELECCIONADOS


//START CREACION NODO DOM CARRITO ITEMS
function addCardToShoppingCart(cardTitle, cardPrice, cardImage) {
    // SELECCIONAR Y SUMAR ITEMS CON EL MISMO NOMBRE 
    const elementsTitle = document.getElementsByClassName(
        'shoppingCartItemTitle');
        for (let i = 0; i < elementsTitle.length; i++){
            if (elementsTitle[i].innerText === cardTitle){
                let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
                elementQuantity.value++;
                $('.toast').toast('show')
                updateShoppingCartTotal();
                return;
            };
        };

    //  APPEND DIV PARA AGREGAR AL CARRITO Y GUARDAR EN LOCALSTORAGE  
    const shoppingCartRow = document.createElement ('div');
    const shoppingCartContent =`
    <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${cardImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ms-3 mb-0">${cardTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${cardPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;

    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);
    addLocalStorage();


    // EVENTO CLICK BOTON DELETE
    shoppingCartRow.querySelector(".buttonDelete")
    .addEventListener ('click',removeShoppingCartItem);      
    
    // EVENTO CHANGE PARA CAMBIAR CANTIDAD DE ITEMS
    shoppingCartRow.querySelector('.shoppingCartItemQuantity')
    .addEventListener ('change',quantityChange);

    updateShoppingCartTotal();
};



// START JQUERY APPEND - event CLICK - CSS
$(document).ready(function(){
    $('.card').click (function () {
                if ($('.btnAll').length < 1) {
                    $(".jqueryBtn").append(`<div class= btnAll> <button class="btn btn1 btn-success ml-auto comprarButton" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
                <button type="button" class="btn btn2 btn-danger">Cancelar</button></div>`);
                
                
                // jQuery CSS
                $(".btnAll").css ({"display": "flex",
                                    "justify-content": "center",
                                    "align-items": "center",});

                $(".btn1, .btn2").css ({"border": "2px solid",
                                        "margin": "5px",})     


                // JQUERY EVENTOS CLICK PARA REMOVER ITEMS Y BOTONES

                $('.btn2' ).click(function() {
                    $('.shoppingCartItem').remove();
                    $('.btnAll').remove();
                    updateShoppingCartTotal() 
                });

                $('.comprarButton' ).click(function() {
                    $('.shoppingCartItem').remove();
                    $('.btnAll').remove();
                    updateShoppingCartTotal() 
                });   
                
                updateShoppingCartTotal()
            };  
        
        $('.buttonDelete').click(function() {
            if ($('.shoppingCartItem').length <= 0){
                $('.btnAll').remove();
                updateShoppingCartTotal()  
            }  
        });
    });
});
// END JQUERY APPEND - event CLICK - CSS


// START JQUERY ANIMACION EVENTO MOUSE
$(document).ready(function(){
    $('#hover1,#hover2,#hover3,#hover4').mouseenter(function () { 
        $(this).fadeTo( "fast" , 0.7);
        })

    });
        
    $('#hover1,#hover2,#hover3,#hover4').mouseleave(function (){
       $(this).fadeTo( "fast" , 1);
    })
    ;
// END JQUERY ANIMACION EVENTO MOUSE


// START ACTUALIZACION PRECIO ITEMS
function updateShoppingCartTotal(){
    let total = 0;
    const shoppingCartTotal = document.querySelector ('.shoppingCartTotal');
    const shoppingCartItems = document.querySelectorAll ('.shoppingCartItem');
   
    shoppingCartItems.forEach ((shoppingCartItem) => {
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');
    
        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$', ''));

        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);

        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
        console.log('updateShoppingCartTotal -> total', total);
    });

    shoppingCartTotal.innerHTML = `$${total.toFixed(3)}`;
};
// END ACTUALIZACION PRECIO ITEMS



// START FUNCION QUE RECIBE EL EVENTO CLICK Y REMUEVE ITEMS DEL CARRITO
function removeShoppingCartItem (event){
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    
    updateShoppingCartTotal();
};
// END FUNCION QUE RECIBE EL EVENTO CLICK Y REMUEVE ITEMS DEL CARRITO
   

// START FUNCION QUE RECIBE EL EVENTO CHANGE 
function quantityChange(event){
    const input = event.target;
    if (input.value <= 0) {
        input.value = 1
    };
    updateShoppingCartTotal();
};
// END FUNCION QUE RECIBE EL EVENTO CHANGE 





//pusheo de items al ARRAY CARRO
function addItemLocal(newItem) {

    carro.push(newItem); 
};


// START LOCALSTORAGE
//localStorage setItem ARRAY CARRO
function addLocalStorage (){
    localStorage.setItem('compra', JSON.stringify(carro))
};

//localStorage getItem JQUERY ARRAY CARRO
$(function() {
    const storage = JSON.parse(localStorage.getItem(carro));
});
// END LOCALSTORAGE




// STAR Consumo API Dolarsi
const urldolar = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';

$(".dolarapi").append(`<div class=container> <button type="button" id='btn' class= " btn btn-warning btn-sm d-grid gap-2 d-md-block mx-auto fw-bold  "> API Dolar </button></div>`);
$.get(urldolar, (response, status) =>{
    var contador = 0;
    if(status === "success"){
        $("#btn").click(function (event) { 
            console.log(event.target);
            $(".tbody").append(
                `<tr class="table-dark">
                <th scope="row">${contador+1}</th>
                <td>${response[contador].casa.nombre}</td>
                <td>${response[contador].casa.compra}</td>
                <td>${response[contador].casa.venta}</td>
              </tr>`);
           contador++;
        });
    }
});
// END Consumo API Dolarsi