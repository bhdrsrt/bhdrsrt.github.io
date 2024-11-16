function addProduct() {
    // Create the details element and set its attributes
    const detailsElement = document.createElement('details');
    detailsElement.id = `item-${itemCount}`;
    detailsElement.className = 'accordion';
    detailsElement.setAttribute('name', 'form-detail');
    itemCount++;


    // Add inner HTML for the details element
    detailsElement.innerHTML = `
        <summary>Add Product ...</summary>
        <input class="inp-one" type="text" name="prod-code" id="prod-code" placeholder="Product Code">
        <input class="inp-one" type="text" name="prod-descr" id="prod-descr" placeholder="Description">
        <input class="inp-one" type="number" name="prod-qty" id="prod-qty" placeholder="Quantity">
        <input class="inp-one" type="text" name="prod-unit" id="prod-unit" placeholder="Unit">
        <input class="inp-one" type="number" name="prod-gross-price" id="prod-gross-price" placeholder="Gross Price">
        <input class="inp-one" type="number" name="prod-disc-rate" id="prod-disc-rate" placeholder="Discount Rate">
        <input class="inp-one" type="number" name="prod-reduced-price" id="prod-reduced-price" placeholder="Reduced Price">
        <input class="inp-one" type="number" name="prod-net-price" id="prod-net-price" placeholder="Net Price">
    `;

    // Remove 'hidden' attribute from '.prod-info'
    const section = document.querySelector('.prod-info');
    if (section.hasAttribute('hidden')) {
        section.removeAttribute('hidden');
        document.getElementById('add-product').style.width = '1.2em';
    }

    // Append the element to the section (class='prod-info') element
    section.appendChild(detailsElement);
}

// Select the element with id of 'add-product'
const addProductButton = document.getElementById('add-product');

// Add event listener 'click' to the 'addProductButton'
addProductButton.addEventListener('click', addProduct);

// Set item counter
let itemCount = 0;

// Add initial 5 rows
for (itemCount; itemCount<5; ) {
    addProduct();
}