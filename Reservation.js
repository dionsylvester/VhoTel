let nameElement = document.getElementById('nameInput')
let emailElement = document.getElementById('emailInput')
let phoneElement = document.getElementById('phoneInput')
let roomElement = document.getElementById('roomInput')
let inElement = document.getElementById('inInput')
let outElement = document.getElementById('outInput')
let promoElement = document.getElementById('promoInput')
let BCAButton = document.getElementById('dot-1')
let DANAButton = document.getElementById('dot-2')
let GoPayButton = document.getElementById('dot-3')
let OVOButton = document.getElementById('dot-4')
let ShopeePayButton = document.getElementById('dot-5')

function checkInputs(){
    let nameInput = nameElement.value
    let emailInput = emailElement.value
    let roomInput = roomElement.value
    let inInput = inElement.value
    let outInput = outElement.value
    let promoInput = promoElement.value

    var phoneValid = phoneElement.value
    var regex=/^[0-9]+$/

    if(nameInput.length < 3){
        alert('Full name must be 3 or more characters')
    } else if(!emailInput.endsWith('@gmail.com')){
        alert('Must ends with [@gmail.com]')
    } else if(!phoneValid.match(regex)){
        alert('Must consist of number only')
    } else if(roomInput != '1BR' && roomInput != '2BR' && roomInput != 'JS' && roomInput != 'PS' ){
        alert('Enter the correct room type')
    } else if(outInput < inInput){
        alert('Check out date must be later than check in date')
    } else if(promoInput != 'PLANFIRST123' && promoInput != 'FAMILY4EVER' && promoInput != 'HOMESWEET321' && promoInput != 'S1BUKM4N' && promoInput != '0'){
        alert('Promo code is not available')
    } else if(!BCAButton.checked && !DANAButton.checked && !GoPayButton.checked && !OVOButton.checked && !ShopeePayButton.checked){
        alert('Please pick a payment method')
    } else{
        confirm('Reservation has been made')
    }
}
