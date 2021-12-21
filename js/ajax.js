
//event click
const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});



// const shoppingCartItemsContainer = document.querySelector(
//     '.shoppingCartItemsContainer'
//   );

//   jquery
  const shoppingCartItemsContainer = $('.shoppingCartItemsContainer');

// array
let carro = []; 


//evento productos seleccionados
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
    }

    addItemLocal(newItem);
    addCardToShoppingCart(cardTitle, cardPrice, cardImage);
}


//creacion nodo
function addCardToShoppingCart(cardTitle, cardPrice, cardImage) {
    const shoppingCartRow = document.createElement ('div');
    const shoppingCartContent =`
    <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${cardImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${cardTitle}</h6>
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

    // jQuery append y click
        $(".jqueryBtn").append(`<div class= btnall><button class="btn1">Pagar</button>
        <button class="btn2">Cancelar</button></div>`);
    
    $(".btn1").click(function () { 
        $("body").append("<h1>Pago realizado!</h1>")
    });  
    $(".btn2").click(function () { 
        $("body").append("<h1>Pago cancelado!</h1>")
    });

    // jQuery CSS
    $(".btnall").css ({"display": "flex",
                        "justify-content": "center",
                        "align-items": "center",});
   
     $(".btn1, .btn2").css ({"border": "5px solid yellow",
                            "margin": "5px",})

}


//pusheo de items al array
function addItemLocal(newItem) {

    carro.push(newItem); 
}


//localStorage setItem
function addLocalStorage (){
    localStorage.setItem('compra', JSON.stringify(carro))
}

//localStorage getItem JQUERY
$(function() {
    const storage = JSON.parse(localStorage.getItem(carro));
});







// Consumo API Dolarsi
const urldolar = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'

$("body").append(`<button id='btn' class= "d-grid gap-2 col-2 mx-auto"> ver valor del Dolar </button>`);
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
} 
);