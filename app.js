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
        getElement('phonePrice').innerText = totalPrice;
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
        if (totalPrice >= 1219) {
            getElement('phonePrice').innerText = totalPrice;
        }
    }
};

// Update phone quantity
const phonePrice = getElement('phonePrice').innerText;
getElement('incrementPhoneQuantity').addEventListener('click', () => { quantityUpdating('numberOfPhone', true, phonePrice); });
getElement('decrementPhoneQuantity').addEventListener('click', () => { quantityUpdating('numberOfPhone', false, phonePrice); });

// Update case quantity
getElement('incrementCaseQuantity').addEventListener('click', () => { quantityUpdating('numberOfCase', true); });
getElement('decrementCaseQuantity').addEventListener('click', () => { quantityUpdating('numberOfCase', false); });
