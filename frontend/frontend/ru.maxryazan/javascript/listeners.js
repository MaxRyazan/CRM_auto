const article_plus_manufacturer = document.querySelector('.article_plus_manufacturer');
const vin_plus_carMark = document.querySelector('.vin_plus_carMark');
const vin = document.querySelector('.VIN');
const mark = document.querySelector('.MARK');
const article = document.querySelector('.ARTICLE');
const manufacturer = document.querySelector('.MANUFACTURER');


article_plus_manufacturer.addEventListener('click', function(){
    if(vin_plus_carMark.classList.contains('search_toggle')) {
        vin_plus_carMark.classList.remove('search_toggle')
        vin.classList.remove('search_toggle')
        mark.classList.remove('search_toggle')
    }
    article.classList.toggle('search_toggle')
    manufacturer.classList.toggle('search_toggle')
    this.classList.toggle('search_toggle')
})

vin_plus_carMark.addEventListener('click', function(){
    if(article_plus_manufacturer.classList.contains('search_toggle')) {
        article_plus_manufacturer.classList.remove('search_toggle')
        article.classList.remove('search_toggle')
        manufacturer.classList.remove('search_toggle')
    }
    vin.classList.toggle('search_toggle')
    mark.classList.toggle('search_toggle')
    this.classList.toggle('search_toggle')
})


async function searchByArticleAndManufacturer(){
    let article_value = article.value
    let manufacturer_value = manufacturer.value
    const MIX_URL = 'http://localhost:8080/details/api/v1/mixAM/' + article_value + '/' + manufacturer_value
    fetch(MIX_URL, {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    await printDetails(await data.json())
    await createXButtons()
    await createMoveButtons()
    window.addEventListener('keydown', function(e){
        if(e.code === "Enter"){
            deselect()
        }
    })
}

window.addEventListener('keydown', function(){
    if(vin.value !== '' && mark.value !== '' && document.querySelector('.vin_plus_carMark').classList.contains('search_toggle')){
        searchByVinAndCarMark()
    }
})

async function searchByVinAndCarMark(){
    let vin_value = vin.value
    let carMark_value = mark.value
    const MIX_URL = 'http://localhost:8080/details/api/v1/mixVM/' + vin_value + '/' + carMark_value
    const data = await fetch(MIX_URL, {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    await printDetails(await data.json())
    await createXButtons()
    await createMoveButtons()
    window.addEventListener('keydown', function(e){
        if(e.code === "Enter"){
            deselect()
        }
    })
}

async function deselect(){
    if(vin_plus_carMark.classList.contains('search_toggle')){
        vin_plus_carMark.classList.toggle('search_toggle')
        vin.classList.toggle('search_toggle')
        mark.classList.toggle('search_toggle')
        vin.value = ''
        mark.value = ''
    }
    if(article_plus_manufacturer.classList.contains('search_toggle')){
        article_plus_manufacturer.classList.toggle('search_toggle')
        article.classList.toggle('search_toggle')
        manufacturer.classList.toggle('search_toggle')
        article.value = ''
        manufacturer.value = ''
    }
}