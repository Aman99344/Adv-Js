const planets = [

    { planetsName: "sun", gravity: 27.9 },
    { planetsName: "Moon", gravity: 0.1655 },
    { planetsName: "Mercury", gravity: 0.377 },
    { planetsName: "Venus", gravity: 0.9032 },
    { planetsName: "Earth", gravity: 1 },
    { planetsName: "Mars", gravity: 0.3895 },
    { planetsName: "Jupiter", gravity: 2.640 },
    { planetsName: "Saturn", gravity: 1.139 },
    { planetsName: "Uranus", gravity: 0.917 },
    { planetsName: "Neptune", gravity: 1.148 },
]

planets.map((ele) => {
    const options = document.createElement("option")
    options.innerHTML = ele.planetsName
    options.value = ele.gravity

    const select = document.getElementById("selectPlanet")
    select.appendChild(options)
    // console.log("options", options);
})


function calcWeight() {
    var mass = +document.getElementById("inputWeight").value;
    // console.log(Weight);


    const select = document.getElementById("selectPlanet")
    var selectedIndex = select.selectedIndex;
    console.log(selectedIndex);

    const selectedoption = select.options[selectedIndex]
    console.log(selectedoption);

    const gravity = +selectedoption.value
    console.log(gravity);

    const weight = mass * gravity;
    console.log(weight);


    const h1 = document.getElementById("h1")
    var error = "Please Enter Your Mass"
    if (mass == "") {
        h1.innerText = error
    }else if(mass < 0){
        h1.innerText = "Please Enter mass greater than 0"
    }
    else {
        h1.innerText = weight;
    } 

}   
