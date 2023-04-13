const inputbox = document.querySelector('.input-box')
const searchbtn = document.querySelector('#search-btn')
const Tempruture = document.querySelector('.temprture')
const description = document.querySelector('.description')
const humidity = document.getElementById('humidity')
const wind = document.getElementById('wind')
const weather_image = document.querySelector('.weather-image')
const weater_body = document.querySelector('.wether-body')
const location_not_found = document.querySelector('.locatin_not_found')

checkWether = async (city) => {

    const API_Key = "6703892fc0d6310403009d2bd431ca84"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`
    const responce = await fetch(`${url}`)
    const data = await responce.json()
    console.log(data)

    if(data.cod === '404'){
        location_not_found.style.display ="flex"
        weater_body.style.display = "none"
        return
    }

    location_not_found.style.display ="none"
    weater_body.style.display = "flex"

    Tempruture.innerHTML = `${(data.main.temp)}°C`
    description.innerHTML = `${data.weather[0].description}`
    humidity.innerHTML = `${data.main.humidity}%`
    wind.innerHTML = `${data.wind.speed}Km/H`
  
    switch(data.weather[0].main){

        case 'Clouds':
            weather_image.src = "images/Clods.jpg"
            break
        case 'Clear':
            weather_image.src = "images/Clear.png"
            break
        case 'Mist':
            weather_image.src = "images/Mist.png"
            break
        case 'Rain':
            weather_image.src = "images/Rain.jpg"
            break
        case 'Snow':
            weather_image.src ="images/Snow.jpg"
            break 
    }
}

searchbtn.addEventListener('click', ()=>{
   
    checkWether(inputbox.value)
});








