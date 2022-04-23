const tableView = (function () {

    const elements = {
        select: document.getElementById('productSelect'),
        statusBar: document.getElementById('topStatusBar'),
        tbody: document.getElementById('tbody'),
        product: document.getElementById('product'),
        status: document.getElementById('status')
    }

    function renderRequests(requests) {
        elements.tbody.innerHTML = ''

        if (requests.length > 0) {
            requests.forEach(item => {
                const product = model.products[item.product]
                const status = model.status[item.status][0];
                const style = model.status[item.status][1]

                const html = `<tr id="${item.id}" class="request">
                            <th scope="row">${item.id}</th>
                            <td>${item.date}</td>
                            <td>${product}</td>
                            <td>${item.name}</td>
                            <td>${item.email}</td>
                            <td>${item.phone}</td>
                            <td>
                                <div id="status" class="badge badge-pill ${style}">${status}</div>
                            </td>
                            <td>
                                <a href="edit.html" id="edit">Редактировать</a>
                            </td>
                        </tr>`
                elements.tbody.insertAdjacentHTML('beforeend', html)
            })
        }

    }

    function changeFilter(filter) {
        elements.select.value = filter.products
    }

    return {
        elements,
        renderRequests,
        changeFilter,
    }

})()