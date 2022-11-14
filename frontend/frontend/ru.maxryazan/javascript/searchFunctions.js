const searchParams = ['.ARTICLE', '.NAME', '.MARK', '.VIN', '.MANUFACTURER'];

/*  Обработчики событий для каждого input (searchParams = классы input-полей)  */
for(let item of searchParams) {
    let inputField = document.querySelector(item)
    inputField.addEventListener('keydown', function (e) {
        if (e.code === "Enter") {
            search(item);
            inputField.value = ''
        }
    })
}

/*  Функции поиска по введенному параметру (параметр = класс input-поля)  */
function search(findBy){
        let searchingObj = document.querySelector(findBy).value;
        const URL = 'http://localhost:8080/details/api/v1/' + findBy.slice(1) + '/' + searchingObj
        fetchByParam(URL).then(r => r)
}

/* Основной метод выполнения программы */
async function fetchByParam(param) {
    const data = await fetch(param, {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
 await printDetails(await data.json())
 await createXButtons()
 await createMoveButtons()
}


/*  Печать на экран "найденных" строк из БД  */
async function printDetails(details) {
    let count = 0;
    details.forEach(obj => {
            document.querySelector('.all_details_container').insertAdjacentHTML('beforeend',
                `
            <div class="insert_inline_container" id="inline${count}">
                <div class="detail">${obj.name}</div>
                <div class="detail">${obj.vin}</div>
                <div class="detail">${obj.article}</div>
                <div class="detail">${obj.manufacturer}</div>
                <div class="detail">${obj.carMarks.join(" ")}</div>
                <div class="detail">${obj.description}</div>
                <button class="table_button" id="btn${count}">X</button>
                <button class="move_button" id="move_btn${count++}">></button>
            </div>
           `
            )
    })
}


