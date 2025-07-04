function TotalPriceUp(product)
{
    ItemPrice = product.querySelector('.unit-price');
    ItemPriceN = parseInt(ItemPrice.innerHTML) || 0;

    let Total = document.getElementsByClassName('total')[0];
    TotalN = parseInt(Total.innerHTML) || 0 ;


    TotalN += ItemPriceN;
    Total.innerHTML =  `${TotalN} $`;
}

function TotalPriceDown(product)
{
    ItemPrice = product.querySelector('.unit-price');
    ItemPriceN = parseInt(ItemPrice.innerHTML) || 0;

    let Total = document.getElementsByClassName('total')[0];
    TotalN = parseInt(Total.innerHTML) || 0  ;

    TotalN -= ItemPriceN;
    Total.innerHTML = `${TotalN} $`;
}


let PlusIcone = document.querySelectorAll('.fas.fa-plus-circle');

PlusIcone.forEach(icone=> {icone.addEventListener('click', function(e){

    let product = icone.closest('.card-body');

    let quantity = product.querySelector('.quantity');
    let current = parseInt(quantity.innerHTML) || 0;
    quantity.innerHTML = current + 1;

    TotalPriceUp(product);

})
})


let MinusIcone = document.querySelectorAll('.fas.fa-minus-circle');

MinusIcone.forEach(icone=> {icone.addEventListener('click', function(e){

    let product = icone.closest('.card-body');

    let quantity = product.querySelector('.quantity');
    let current = parseInt(quantity.innerHTML) || 0;

    if(current > 0)
    {
        quantity.innerHTML = current - 1;
        TotalPriceDown(product);
    }

})})

let HeartIcon = document.querySelectorAll('.fas.fa-heart');

HeartIcon.forEach(icone => {icone.addEventListener('click', function(e){

    let product = icone.closest('.card-body');

    let fav = product.querySelector('.fa-heart');
    if(fav.style.color == "red")
        fav.style.color = "black";
    else
        fav.style.color = "red";
    
})
})

let TrashIcone = document.querySelectorAll('.fas.fa-trash-alt');

TrashIcone.forEach(icone => {icone.addEventListener('click', function(e){

    let product = icone.closest('.card-body');

    product.remove();
    
})
})