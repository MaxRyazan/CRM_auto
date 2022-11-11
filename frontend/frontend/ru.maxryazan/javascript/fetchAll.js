// const URL_ALL = 'http://localhost:8080/details/api/v1/all'

// async function waitFetch() {
//    const data = await fetch(URL_ALL, {
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         }
//     })
//     printDetails(await data.json())
//
//     //Последовательность дивов в родителе
//     let searchingParams = ['.NAME', '.VIN', '.ARTICLE', '.MANUFACTURER', '.MARK']
//     for(let i = 0; i < searchingParams.length; i++){
//         document.querySelector(searchingParams[i]).addEventListener('input', () => {
//             searchDetail(searchingParams[i], i + 1)
//         })
//     }
// }
// waitFetch().then(r => r)


/* Вывод всех деталей в таблицу */


// function searchDetail(selector, childrenNumber) {
//     let inlineAll = document.querySelectorAll('.insert_inline_container')
//     let searchingSubString =  document.querySelector(selector).value;
//     for(let a of inlineAll){
//         if(a.children[childrenNumber].innerHTML.indexOf(searchingSubString) === -1){
//             a.classList.add('hide')
//         }
//         if(a.children[childrenNumber].innerHTML.indexOf(searchingSubString) !== -1){
//             a.classList.remove('hide')
//         }
//     }
// }

// function hideLines(selector){
//     let inlines = document.querySelectorAll(selector)
//     for(let item of inlines){
//         if(+item.id > 20){
//             item.classList.add('hide')
//         }
//     }
// }