const editView = (function () {
    
    const elements = {
        name: document.getElementById('name'),
        phone: document.getElementById('phone'),
        email: document.getElementById('email'),
        product: document.getElementById('product'),
        status: document.getElementById('status'),
        id: document.getElementById('number'),
        date: document.getElementById('date'),
        newDate: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        form: document.getElementById('form'),
    }

    function renderRequest(request) {
        elements.id.innerText = request.id
        elements.date.innerText = `${elements.newDate} ${elements.time}`
        elements.name.value = request.name
        elements.phone.value = request.phone
        elements.email.value = request.email
        elements.product.value = request.product
        elements.status.value = request.status
    }

    function getFormData() {
        return {
            id: elements.id.innerText,
            name: elements.name.value,
            email: elements.email.value,
            date: elements.date.innerText,
            phone: elements.phone.value,
            status: elements.status.value,
            product: elements.product.value,
        }

    }

    return {
        elements: elements,
        renderRequest,
        getFormData
    }
})()