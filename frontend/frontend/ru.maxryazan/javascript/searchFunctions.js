/*  Функции поиска по введенному параметру (параметр = класс input-поля  */
function search(findBy){
    let searchingObj = document.querySelector(findBy).value;
    const URL = 'http://localhost:8080/details/api/v1/'+ findBy.slice(1) + '/'+ searchingObj
    async function fetchByArticle(){
        const data = await fetch(URL, {
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        printDetails(await data.json())
    }
    fetchByArticle().then(r => r)
}

/*  Обработчики событий для каждого input (searchParams = классы input-полей)  */
let searchParams = ['.ARTICLE', '.NAME', '.MARK', '.VIN', '.MANUFACTURER']
for(let item of searchParams) {
    let inputField = document.querySelector(item)
    inputField.addEventListener('keydown', function (e) {
        if (e.code === "Enter") {
            search(item);
            inputField.value = ''
        }
    })
}

/*  Печать на экран "найденных" строк из БД  */
function printDetails(details) {
    let count = 0;
    details.forEach(obj => {
        document.querySelector('.all_details_container').insertAdjacentHTML('beforeend',
            `
            <div class="insert_inline_container" id="${count++}">
                <div class="detail id">${obj.id}</div>
                <div class="detail">${obj.name}</div>
                <div class="detail">${obj.vin}</div>
                <div class="detail">${obj.article}</div>
                <div class="detail">${obj.manufacturer}</div>
                <div class="detail">${obj.carMarks.join(" ")}</div>
                <div class="detail">${obj.description}</div>
            </div>
           `
        )
    })
}

/*  Обработчик для кнопки "Очистить таблицу"  */
document.querySelector('.clear_button').addEventListener('click', () => {
   const lines = document.querySelectorAll('.insert_inline_container')
    lines.forEach(item => item.classList.add('hide'))

})