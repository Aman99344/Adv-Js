const subheading = document.getElementById("subheading");
// console.log(subheading);
subheading.innerText = `currently, we have ${countries_data.length} countries`;

const graphTitle = document.getElementById("graphTitle");

const sortedData = countries_data.sort(function (a, b) {
  return b.population - a.population;
});

let totalPopulation = 0;

for(let i =0; i<countries_data.length; i++){
    totalPopulation += countries_data[i].population
}

console.log(totalPopulation);

function buttonOneClicked() {
  console.log("one");
  graphTitle.innerText = "10 most populated contries in the world";

  for (let i = 0; i < 10; i++) {
    const oneDiv = document.createElement("div");
    
    const country_Name = document.createElement("p");
    country_Name.innerText = sortedData[i].name;
    
    oneDiv.appendChild(country_Name);
    
    // const percentDiv = document.createElement("div")
    const percentageDiv = document.createElement("div")
    
    const percentage = (sortedData[i].population/totalPopulation)*100;
    percentageDiv.style.width = `${percentage}%`
    percentageDiv.style.backgroundColor = "orange"

    percentageDiv.innerText = percentage;

    const graphDiv = document.getElementById("graph")
    oneDiv.appendChild(percentageDiv)
    graphDiv.appendChild(oneDiv)

    console.log(percentage);
    console.log(oneDiv);
  }
} 



function buttonTwoClicked() {
  console.log("two");
  graphTitle.innerText = "10 most spoken language in the world";
}

