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


function createXButtons() {
    let table_buttonsX = document.querySelectorAll('.table_button')
            for(let i = 0; i < table_buttonsX.length; i++){
                table_buttonsX[i].addEventListener('click', function () {
                document.querySelector('#inline'+i).classList.add('hide')
            })
        }
}
