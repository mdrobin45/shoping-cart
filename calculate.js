// Get Element
function getElement(Id) {
    let element = document.getElementById(Id);
    return element;
}
/***********************************************/
// Function for mobile
// Increment mobile quantity
getElement('incrementPhoneQuantity').addEventListener('click', function () {
    let mobileQuantityValue = getElement('numberOfPhone');
    mobileQuantityValue.value = Number(mobileQuantityValue.value) + 1;
    // Price Update
    getElement('phonePrice').innerText = mobileQuantityValue.value*1219;
    
});

// Decrement mobile quantity
getElement('decrementPhoneQuantity').addEventListener('click', function () {
    let mobileQuantityValue = getElement('numberOfPhone');
    // Quantity will not negative
    if (mobileQuantityValue.value > 1) {
        mobileQuantityValue.value = Number(mobileQuantityValue.value) - 1;
    }
    // Price update
    getElement('phonePrice').innerText = mobileQuantityValue.value*1219;
});

console.log(getElement('phonePrice').innerText);

/**********************************************************************************/

// Function for case
// Increment case quantity
getElement('incrementCaseQuantity').addEventListener('click', function () {
    let caseQuantity = getElement('numberOfCase');
    caseQuantity.value = Number(caseQuantity.value) + 1;
    // Price update
    getElement('casePrice').innerText = caseQuantity.value*59;
});
// Decrement case quantity
getElement('decrementCaseQuantity').addEventListener('click', function () {
    let caseQuantity = getElement('numberOfCase');
    // Quantity will not negative
    if (caseQuantity.value > 1) {
        caseQuantity.value = Number(caseQuantity.value) - 1;
    }
    // Price update
    getElement('casePrice').innerText = caseQuantity.value*59;
});
console.log(mobileQuantityValue.value);
