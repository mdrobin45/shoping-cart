'use strict';
// Get element by id function
function getElement(Id) {
    let element = document.getElementById(Id);
    return element;
}

// Quantity update arrow function
const quantityUpdating = (Id, isIncrement, price) => {
    // Increment quantity & price
    if (isIncrement == true) {
        let quantity = Number(getElement(Id).value) + 1;
        getElement(Id).value = quantity;

        // Update price
        let toNumber = parseInt(price);
        let totalPrice = quantity * toNumber;
        if (price==1219) {
            getElement('phonePrice').innerText = totalPrice;
        }else if(price==59){
            getElement('casePrice').innerText = totalPrice;
        }
        
    }
    // Decrement quantity & price
    else {
        let quantity = Number(getElement(Id).value) - 1;
        // Quantity will be positive not negative
        if (quantity > 0) {
            getElement(Id).value = quantity;
        }

        //Update price
        let toNumber = parseInt(price);
        let totalPrice = quantity * toNumber;
        if (price==1219) {
            getElement('phonePrice').innerText = totalPrice;
            // console.log(totalPrice);
        }else if(price==59){
            getElement('casePrice').innerText = totalPrice;
            // console.log(totalPrice);
        }
    }
};

// Update phone quantity
const phonePrice = getElement('phonePrice').innerText;
getElement('incrementPhoneQuantity').addEventListener('click', () => { quantityUpdating('numberOfPhone', true, phonePrice); });
getElement('decrementPhoneQuantity').addEventListener('click', () => { quantityUpdating('numberOfPhone', false, phonePrice); });

// Update case quantity
const casePrice=getElement('casePrice').innerText;
getElement('incrementCaseQuantity').addEventListener('click', () => { quantityUpdating('numberOfCase', true,casePrice); });
getElement('decrementCaseQuantity').addEventListener('click', () => { quantityUpdating('numberOfCase', false,casePrice); });
