const tableСontroller = (function (model, view) {

    function init() {
        const filteredRequests = model.filterRequest(model.filter)
        view.renderRequests(filteredRequests)
        addEventListener()
        view.changeFilter(model.filter)
    }

    function addEventListener() {
        view.elements.tbody.addEventListener('click', editRequest)
        view.elements.select.addEventListener('change', filterProducts)
        view.elements.statusBar.addEventListener('click', filterStatusBar)
    }

    function editRequest(e) {
        if (e.target.id === 'edit') {
            const ID = e.target.closest('.request').id
            model.setIdRequest(ID)
        }
    }

    function filterProducts() {
        const filter = model.changeFilter('products', this.value)
        const filterRequest = model.filterRequest(filter)
        view.renderRequests(filterRequest)
    }

    function filterStatusBar(e) {
        const filter = model.changeFilter('status', e.target.dataset.value)
        const filterRequest = model.filterRequest(filter)
        view.renderRequests(filterRequest)
    }

    return {
        init,
    }

})(model, tableView)

tableСontroller.init()