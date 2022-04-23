const controller = (function () {

    const DOM = view.getDomStrings()

    function formEventListener() {
        DOM.form.addEventListener('submit', requestFormHandler)
    }


    function requestFormHandler(e) {
        e.preventDefault()

        // Получаем все значения инпутов
        const dataForm = view.getInput()

        // Добавить полученные данные в модель
        model.createNewRequest(dataForm.name, dataForm.phone, dataForm.email, dataForm.product)

        // Очищаем форму
        view.clearForm()

        generateTestDate.init()
    }


    return {
        formEventListener
    }

})()

controller.formEventListener()