console.log("hello")
const inputSearch= document.getElementById("inputSearch")
console.log(inputSearch.value)

const output= document.getElementById("output")

async function searchlocation(){
    console.log()
    var value=inputSearch.value
    console.log(value)
    const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`)

    console.log(res)

    const data= await res.json()
    console.log(data)

    output.style.backgroundColor="white"

    output.innerHTML=`<div class="name">
    <h3>Weather of ${data.name}</h3>
</div>
<div class="Weatherdetails">

    <p>Sky Conditions: <a>${data.weather[0].description}</a></p>
    <p>Temperature: <a>${data.main.temp}C</a></p>
    <p>Wind Speed: <a>${data.wind.speed} km/h </a></p>

</div>`
  
}