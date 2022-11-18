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
    showTodayOrders()
    document.querySelector('.today_orders').style.display = 'block'
})


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

async function showTodayOrders(){
   const URL_TODAY = 'http://localhost:8080/details/api/v1/order-today'
   const orders_today = await fetch(URL_TODAY, {
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
       await printTodayOrders(await orders_today.json())
}


async function printTodayOrders(orders){
    let result = deleteDoubles(orders)
    result.forEach(item => {
        document.querySelector('.today_orders').insertAdjacentHTML('beforeend',
            `
            <div class="insertToday">
                <div class="detail">${item.id}</div>
                <div class="detail">${item.client_FIO}</div>
                <div class="detail">${item.timeOfCreation}</div>
                <div class="detail">${item.timeOfDeadLine}</div>
                <div class="detail">${item.details.join(" ")}</div>
            </div>
            `
        )
    })

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
    console.log(result)
    return result
}