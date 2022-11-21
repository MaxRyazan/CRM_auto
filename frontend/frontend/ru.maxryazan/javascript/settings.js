const URL_TODAY = 'http://localhost:8080/details/api/v1/order-today'
const URL_ALL = 'http://localhost:8080/details/api/v1/order-all'

document.querySelector('.x_button_print').addEventListener('click', function(){
    document.querySelector('.for_print').style.display = 'none'
    document.querySelectorAll('.relative_left20_5').forEach(item =>item.remove())
})

document.querySelector('.close_btn_search').addEventListener('click', function(){
    document.querySelector('.all_details_container').classList.add('hide')
    document.querySelector('.open_button_search').style.display = 'block'
})

document.querySelector('.close_btn_order').addEventListener('click', function(){
    document.querySelector('.order_container').classList.add('hide')
    document.querySelector('.open_button_order').style.display = 'block'
})

document.querySelector('.open_button_search').addEventListener('click', function (){
    document.querySelector('.all_details_container').classList.remove('hide')
    this.style.display = 'none'
})

document.querySelector('.open_button_order').addEventListener('click', function (){
    document.querySelector('.order_container').classList.remove('hide')
    this.style.display = 'none'
})

/*  Обработчик для кнопки "Очистить таблицу"  */
document.querySelector('.clear_button').addEventListener('click', () => {
    const lines = document.querySelectorAll('.insert_inline_container')
    lines.forEach(item => item.classList.add('hide'))
})

/*  Обработчик для кнопки закрытия окна сегодняшних заказов  */
document.querySelector('.close_today_order').addEventListener('click', function(){
    document.querySelectorAll('.insertToday').forEach(item => item.remove())
    document.querySelector('.today_orders').style.display = 'none'
})

/* Обработчик кнопки "Сегодняшние заказы" */
document.querySelector('.today').addEventListener('click', function(){
    if(document.querySelector('.today_orders').style.display === 'block'){
       let doubles = document.querySelectorAll('.insertToday')
        doubles.forEach(item => item.classList.add('hide'))
    }
    showOrders(URL_TODAY)
    document.querySelector('.today_orders').style.display = 'block'
})

document.querySelector('.all').addEventListener('click', function(){
    if(document.querySelector('.today_orders').style.display === 'block'){
        let doubles = document.querySelectorAll('.insertToday')
        doubles.forEach(item => item.classList.add('hide'))
    }
    showOrders(URL_ALL)
    document.querySelector('.today_orders').style.display = 'block'
})


/* Создание кнопок печати таблице */
async function createPrintButtons() {
    let print_buttons = document.querySelectorAll('.btn_for_print')
    for(let i = 0; i < print_buttons.length; i++){
        print_buttons[i].addEventListener('click', function () {
          let number = print_buttons[i].className.slice(27)
            create_div(number)
        })
    }
}

/* Создание страницы для печати, где number - строка заказа в таблице */
function create_div(number){
    const div_with_order_data  = document.querySelector('.insertToday' + number)
    const for_print = document.querySelector('.for_print')
    const owner = div_with_order_data.children.item(0).innerHTML
    const date_from = div_with_order_data.children.item(1).innerHTML
    const date_to = div_with_order_data.children.item(2).innerHTML

    document.querySelector('.for_print__owner').innerHTML = owner
    document.querySelector('.for_print__data_from').innerHTML = date_from
    document.querySelector('.for_print__data_to').innerHTML = date_to

    let count = div_with_order_data.children.item(3).children.length

    for(let i = 0; i < count; i++) {
        let detail_name = document.createElement('div')
        detail_name.classList.add('relative_left20_5')
        detail_name.innerHTML =  div_with_order_data.children.item(3).children[i].innerHTML
        document.querySelector('.for_print__name').appendChild(detail_name)

        let detail_article = document.createElement('div')
        detail_article.classList.add('relative_left20_5')
        detail_article.innerHTML =  div_with_order_data.children.item(4).children[i].innerHTML
        document.querySelector('.for_print__article').appendChild(detail_article)

        let detail_vin = document.createElement('div')
        detail_vin.classList.add('relative_left20_5')
        detail_vin.innerHTML =  div_with_order_data.children.item(5).children[i].innerHTML
        document.querySelector('.for_print__vin').appendChild(detail_vin)

        let detail_mark = document.createElement('div')
        detail_mark.classList.add('relative_left20_5')
        detail_mark.innerHTML =  div_with_order_data.children.item(6).children[i].innerHTML
        document.querySelector('.for_print__mark').appendChild(detail_mark)

        let detail_manufacturer = document.createElement('div')
        detail_manufacturer.classList.add('relative_left20_5')
        detail_manufacturer.innerHTML =  div_with_order_data.children.item(7).children[i].innerHTML
        document.querySelector('.for_print__manufacturer').appendChild(detail_manufacturer)
    }
    for_print.style.display = 'block'

}

/* Создание кнопок удаления в таблице */
function createXButtons() {
    let table_buttonsX = document.querySelectorAll('.cancel_button')
            for(let i = 0; i < table_buttonsX.length; i++){
                table_buttonsX[i].addEventListener('click', function () {
                document.querySelector('#inline'+i).classList.add('hide')
            })
        }
}

/* Создание кнопок перемещения в таблице */
function createMoveButtons(){
    let move_buttons = document.querySelectorAll('.move_button')
    let order_zone = document.querySelector('.droppable')
        for(let i = 0; i < move_buttons.length; i++){
            move_buttons[i].addEventListener('click', function(){
                order_zone.append(document.querySelector('#inline'+move_buttons[i].id.slice(8)))
                move_buttons[i].classList.add('hide')
            })
        }
}

onresize = () => {   document.querySelector('.test').innerHTML = `${window.innerWidth}`};


document.querySelector('.confirm_order_button').addEventListener('click', getOrdersIdArray)

/* Создание заказа на стороне браузера, и пост-фетч его на бэкэнд */
function getOrdersIdArray() {
    let array_of_id = []
    let date = new Date()
    let month = (+date.getMonth() + 1).toString()
    let deadline = document.querySelector('.deadline[type="date"]').value
    let dateNow = date.getDate() + '-' + month + '-' +date.getFullYear()
    let FIO = document.querySelector('.fio').value
    array_of_id.push(FIO)
    array_of_id.push(dateNow)
    array_of_id.push(deadline)
   let children_array = Array.from(document.querySelector('.order_container').children.item(1).children)
    children_array.forEach((item) => {
        if(item.classList.contains('insert_inline_container')){
            array_of_id.push(item.children.item(0).innerHTML)
        }
    })
    postFetch(array_of_id)
    document.querySelector('.fio').value = ''
    document.querySelector('.deadline[type="date"]').value = ''
    let containers = document.querySelector('.droppable').children
    for(let item of containers){
        if(item.className === 'insert_inline_container'){
            item.remove()
        }
    }
}


/* Показать сегодняшние заказы, с фетчем API */
async function showOrders(URL){
   const orders = await fetch(URL, {
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
   })
       await printOrders(await orders.json())
       await createPrintButtons()
}


async function printOrders(orders) {
    let count = 0
    if (orders.length !== 0) {
        let result = deleteDoubles(orders)
        result.forEach(item => {
        document.querySelector('.today_orders').insertAdjacentHTML('beforeend',
        `
            <div class="insertToday insertToday${count}">
                <div class="detail">${item.client_FIO}</div>
                <div class="detail">${item.timeOfCreation}</div>
                <div class="detail">${item.timeOfDeadLine}</div>
                <div class="detail">${item.details.map(detail => `<div>${detail.name}</div>`).join("")}</div>
                <div class="detail">${item.details.map(detail => `<div>${detail.article}</div>`).join("")}</div>
                <div class="detail">${item.details.map(detail => `<div>${detail.vin}</div>`).join("")}</div>
                <div class="detail">${item.details.map(detail => `<div>${detail.carMarks}</div>`).join("")}</div>
                <div class="detail">${item.details.map(detail => `<div>${detail.manufacturer}</div>`).join("")}</div>
                <div class="btn_for_print btn_for_print${count}"><img class="print_img" src="../images/printer.png" alt=""></div>
            </div>
            `
                    )
            count++
        })
    }
}



function deleteDoubles(orders){
    let start = orders[0]
    let result = [orders[0]]
    for(let i = 1; i < orders.length; i++){
        if(orders[i].id !== start.id){
           result.push(orders[i])
            start = orders[i]
        }
    }
    return result
}