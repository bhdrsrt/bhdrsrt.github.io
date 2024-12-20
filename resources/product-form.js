function addProduct() {
    // Create the details element and set its attributes
    const detailsElement = document.createElement('details');
    detailsElement.id = `item-${itemCount}`;
    detailsElement.className = 'accordion';
    detailsElement.setAttribute('name', 'form-detail');
    
    // Add inner HTML for the details element
    detailsElement.innerHTML = `
        <summary>Product Details ${itemCount+1}</summary>
        <input class="inp-one" type="text" name="${itemCount}-0-prod-code" id="${itemCount}-0-prod-code" placeholder="Product Code">
        <input class="inp-one" type="text" name="${itemCount}-1-prod-descr" id="${itemCount}-1-prod-descr" placeholder="Description">
        <input class="inp-one" type="number" name="${itemCount}-2-prod-qty" id="${itemCount}-2-prod-qty" placeholder="Quantity">
        <input class="inp-one" type="text" name="${itemCount}-3-prod-unit" id="${itemCount}-3-prod-unit" placeholder="Unit">
        <input class="inp-one" type="number" name="${itemCount}-4-prod-gross-price" id="${itemCount}-4-prod-gross-price" placeholder="Gross Price">
        <input class="inp-one" type="number" name="${itemCount}-5-prod-disc-rate" id="${itemCount}-5-prod-disc-rate" placeholder="Discount Rate">
        <input class="inp-one" type="number" name="${itemCount}-6-prod-reduced-price" id="${itemCount}-6-prod-reduced-price" placeholder="Reduced Price">
        <input class="inp-one" type="number" name="${itemCount}-7-prod-net-price" id="${itemCount}-7-prod-net-price" placeholder="Net Price">
    `;

    // Append the element to the section (class='prod-info') element
    document.querySelector('.prod-info').appendChild(detailsElement);

    // Open added child automatically
    document.querySelector(`#item-${itemCount} > summary`).click();
    
    itemCount++;
}

// Select the element with id of 'add-product'
const addProductButton = document.getElementById('add-product');

// Add event listener 'click' to the 'addProductButton'
addProductButton.addEventListener('click', addProduct);

// Set item counter
let itemCount = 0;

// Add initial 5 rows
for (itemCount; itemCount<10; ) {
    addProduct();
}

// Open customer information section after page loaded state
document.querySelector(".customer-info summary").click();