const editController = (function () {

    function init() {
        const id = model.getRequestById()
        const request = model.getEditableRequest(id)
        editView.renderRequest(request)
        setUpEventListener()
    }
    
    function setUpEventListener() {
        editView.elements.form.addEventListener('submit', upDateRequest)
    }

    function upDateRequest(e){
        e.preventDefault()
        const formData = editView.getFormData()
        model.upDateRequest(formData)
        window.location = 'table.html'
    }

    return {
        init,
    }
})()

editController.init()