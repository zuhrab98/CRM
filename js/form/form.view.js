const view = (function () {

    const DOMstrings = {
        form: document.getElementById('form'),
        name: document.getElementById('name'),
        phone: document.getElementById('phone'),
        email: document.getElementById('email'),
        product: document.getElementById('product'),
        tbody: document.getElementById('tbody')
    }

    function getInput() {
        return {
            name: DOMstrings.name.value,
            phone: DOMstrings.phone.value,
            email: DOMstrings.email.value,
            product: DOMstrings.product.value,
        }
    }

    function clearForm() {
        DOMstrings.name.value = ''
        DOMstrings.phone.value = ''
        DOMstrings.email.value = ''
        DOMstrings.product.value = ''
    }


    return {
        getInput,
        clearForm,
        getDomStrings() {
            return DOMstrings
        },
    }
})()