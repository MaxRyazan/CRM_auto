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

function getOrdersIdArray() {
   let array_of_id = []
   let children_array = Array.from(document.querySelector('.order_container').children.item(1).children)
    children_array.forEach((item) => {
        if(item.classList.contains('insert_inline_container')){
            array_of_id.push(item.children.item(0).innerHTML)
        }
    })
    return array_of_id
}

