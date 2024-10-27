const accordionDetails = {
    'parent': {
        'element': 'details', 
        'className': 'accordion', 
        'name': 'form-detail'
    },
    'child1': {
        'element': 'summary', 
        'content': 'Add Product ...' 
    },
    'child2': {
        'element': 'input',
        'className': 'inp-one',
        'type': 'text',
        'name': 'prod-code',
        'id': 'prod-code',
        'placeholder': 'Product Code'
    },
    'child3': {
        'element': 'input',
        'className': 'inp-one',
        'type': 'text',
        'name': 'prod-descr',
        'id': 'prod-descr',
        'placeholder': 'Description'
    },
    'child4': {
        'element': 'input',
        'className': 'inp-one',
        'type': 'number',
        'name': 'prod-qty',
        'id': 'prod-qty',
        'placeholder': 'Quantity'
    },
    'child5': {
        'element': 'input',
        'className': 'inp-one',
        'type': 'text',
        'name': 'prod-unit',
        'id': 'prod-unit',
        'placeholder': 'Unit'
    },
    'child6': {
        'element': 'input',
        'className': 'inp-one',
        'type': 'number',
        'name': 'prod-gross-price',
        'id': 'prod-gross-price',
        'placeholder': 'Gross Price'
    },
    'child7': {
        'element': 'input',
        'className': 'inp-one',
        'type': 'number',
        'name': 'prod-disc-rate',
        'id': 'prod-disc-rate',
        'placeholder': 'Discount Rate'
    },
    'child8': {
        'element': 'input',
        'className': 'inp-one',
        'type': 'number',
        'name': 'prod-reduced-price',
        'id': 'prod-reduced-price',
        'placeholder': 'Reduced Price'
    },
    'child9': {
        'element': 'input',
        'className': 'inp-one',
        'type': 'number',
        'name': 'prod-net-price',
        'id': 'prod-net-price',
        'placeholder': 'Net Price'
    }
};

function createAccordion(details) {
    let accordion;
    for (const hierarchy in details) {
        if (hierarchy.substring(0, hierarchy.length-1) === 'child') {
            console.log(hierarchy);
        } else if (hierarchy === 'parent') {
            for (const property in hierarchy) {
                if (property === 'element') {
                    accordion = document.createElement(hierarchy[property]);
                } else {
                    `accordion.${property}` = hierarchy[property];
                }
            }
        }
        else {
            console.log(`The key <${hierarchy}> not found`);
        }
    }
}

createAccordion(accordionDetails);

