const generateTestDate = (function () {
    class ExampleForm {
        constructor(id, name, phone, email, product) {
            this.id = id
            this.name = name
            this.phone = phone
            this.email = email
            this.product = product
        }
    }

    const testDate = [
        new ExampleForm('0', 'Роман зайцев', '79913454576', 'roman.zaicev@icloud.com', 'course-js'),
        new ExampleForm('1', 'Олег Аушев', '4568762309571', 'oleg@mail.ru', 'course-php'),
        new ExampleForm('2', 'Илья Романов', '89994572227', 'ily_romanov@yandex.ru', 'course-vue'),
        new ExampleForm('3', 'Сергей Петухов', '128093478734', 'petuhov@mail.com', 'course-js'),
        new ExampleForm('4', 'Денис Оленичев', '88890923545', 'den.olenichev@info.ru', 'course-wordpress')
    ]

    function insertInUi() {
        const randomItem = testDate[Math.floor(Math.random() * testDate.length)]
        document.getElementById('name').value = randomItem.name
        document.getElementById('phone').value = randomItem.phone
        document.getElementById('email').value = randomItem.email
        document.getElementById('product').value = randomItem.product
    }

    return {
        init: insertInUi
    }

})()

generateTestDate.init()