const totalNoOfCountries = document.getElementById("totalNoOfCountries");
totalNoOfCountries.innerHTML = `Total Number of countries: ${countries.length}`;

const countriesName = [];
countries.map((ele) => {
  countriesName.push(ele.toLowerCase());
});

var lowerContainer = document.getElementById("lowerContainer")
countries.map((ele)=>{
    lowerContainer.innerHTML += ` <div class="card"> ${ele}</div>`

})


function startingWordSearch() {
  const lowerContainer = document.getElementById("lowerContainer");
  lowerContainer.innerHTML = "";

  const inputElement = document.getElementById("countryNameInput")
  inputElement.setAttribute("onkeyup", "startingWordSearch()")

  const input = document.getElementById("countryNameInput").value
  const matchCountries = [];

  countriesName.map((ele) => {
    const list = ele.startsWith(input.toLowerCase());
    // console.log(list);

    if (input == "") {
      lowerContainer.innerHTML = `
            <div class="card">
                <p>please enter a word</p>
            </div>
            `;
    } else {
      if (list) {
        matchCountries.push(ele);
        lowerContainer.innerHTML += `
            <div class="card">
                <p>${ele}</p>
            </div> `;


        const countriesContaining = document.getElementById("countriesContaining");
        countriesContaining.innerText = `Number of countries starting with ${input} are ${matchCountries.length}`;
      }
    }
  });
}



function anyWordSearch() {
  const lowerContainer = document.getElementById("lowerContainer");
  lowerContainer.innerHTML = "";

  const inputElement = document.getElementById("countryNameInput");
  inputElement.setAttribute("onkeyup", "anyWordSearch()");

  const input = document.getElementById("countryNameInput").value;
  const matchedCountries = [];

  countriesName.map((ele) => {
    const hello = ele.includes(input.toLowerCase());

    if (input == "") {
      lowerContainer.innerHTML = `
                <div class="card">
                    <p>please enter a word</p>
                </div>
                `;
    } else {
      if (hello) {
        matchedCountries.push(ele);
        lowerContainer.innerHTML += `
            <div class="card">
                <p>${ele}</p>
            </div>
            `;
        const countriesContaining = document.getElementById("countriesContaining");
        countriesContaining.innerText = `Number of countries starting with ${input} are ${matchedCountries.length}`;
      }
    }
  });
}
