const inputSearch = document.getElementById("inputSearch");

const city = document.getElementById("city");
const temp = document.getElementById("temp");
const weather = document.getElementById("weather");
const minmax = document.getElementById("minmax");


async function showWeather() {
 
const inputVal = inputSearch.value;


  const resultInput = inputVal.toUpperCase();

  const resp = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=2d4fdb50a29b4f55fd283291eae6533e&units=metric`
  );

  console.log(resp);

  const data = await resp.json();
  console.log(data);

  if(inputVal == "" || data.cod == "404"){
    alert("Please Enter a Valid City")
  }else{


    city.innerHTML = resultInput;
    temp.innerHTML = `${Math.round(data.main.temp)}°C`;
    weather.innerHTML = data.weather[0].main;
    minmax.innerHTML = `${Math.round(data.main.temp_max)}°C / ${Math.round(
      data.main.temp_min
    )}°C`;


    const resultDisp = document.getElementById("result")
    resultDisp.classList.add("resultDis")
  }



}
