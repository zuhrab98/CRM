const model = (function () {
    class Request {
        constructor(id, name, phone, email, product) {
            this.id = id
            this.date = new Date().toLocaleDateString() // 23.02.2022
            this.name = name
            this.phone = phone
            this.email = email
            this.product = product
            this.status = 'new'
        }
    }

    let requests = []

    // Делаем проверку есть ли данные в localStorage
    if (localStorage.getItem('request')) {
        requests = JSON.parse(localStorage.getItem('request'))
    }

    const products = {
        'course-html': 'Курс по верстке',
        'course-js': 'Курс по JavaScript',
        'course-vue': 'Курс по VUE JS',
        'course-php': 'Курс по PHP',
        'course-wordpress': 'Курс по Wordpress',
    }

    const status = {
        'inwork': ['В работе', 'badge-warning'],
        'complete': ['Завершенный', 'badge-success'],
        'new': ['Новый', 'badge-danger'],
    }

    let filter = {
        products: 'all',
        status: 'all'
    }

    if (localStorage.getItem('filter')) {
        filter = JSON.parse(localStorage.getItem('filter'))
    }

    function createNewRequest(name, phone, email, product) {
        let ID, newRequest

        // генерируем ID
        if (requests.length > 0) {
            ID = requests[requests.length - 1].id + 1
        } else {
            ID = 0
        }

        // Создаем новую заявку
        newRequest = new Request(ID, name, phone, email, product)

        requests.push(newRequest)
        localStorage.setItem('request', JSON.stringify(requests))
    }

    function setIdRequest(id) {
        localStorage.setItem('edit', JSON.stringify(id))
    }

    function getRequestById() {
        return JSON.parse(localStorage.getItem('edit'))
    }

    function getEditableRequest(id) {
        return requests.find(item => item.id == id)
    }

    function upDateRequest(request) {
        const editRequest = getEditableRequest(request.id)
        editRequest.name = request.name
        editRequest.email = request.email
        editRequest.phone = request.phone
        editRequest.product = request.product
        editRequest.status = request.status
        localStorage.setItem('request', JSON.stringify(requests))
    }

    function changeFilter(products, value) {
        filter[products] = value
        localStorage.setItem('filter', JSON.stringify(filter))
        return filter
    }

    function filterRequest(filter) {
        let filteredRequests

        if (filter.products !== 'all') {
            filteredRequests = requests.filter(item => item.product == filter.products)
        } else {
            filteredRequests = requests
        }

        if (filter.status !== 'all') {
            filteredRequests = filteredRequests.filter(item => item.status == filter.status)
        }

        return filteredRequests

    }

    return {
        getRequests: function () {
            return requests
        },
        products,
        status,
        filter,
        createNewRequest,
        setIdRequest,
        getRequestById,
        getEditableRequest,
        upDateRequest,
        changeFilter,
        filterRequest,
    }

})()

