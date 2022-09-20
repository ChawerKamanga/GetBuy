const shoeCard = document.querySelector('#shoe-card')
const bathingTowel = document.querySelector('#bathing-towel-cart')
let noOfItemsOnCart  = document.querySelector('#no-items-cart')

shoeCard.addEventListener('click', incrementCart)
bathingTowel.addEventListener('click', incrementCart)

function incrementCart() {
    let x = parseInt(noOfItemsOnCart.innerHTML)
    x++
    noOfItemsOnCart.innerHTML = x
}