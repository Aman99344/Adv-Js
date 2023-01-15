function tipCalc() {
  var billAmount = document.getElementById("billAmount").value;
  console.log(billAmount);

  var serviceQuality = document.getElementById("serviceQuality").value;
  console.log(serviceQuality);

  var NumOfPeople = document.getElementById("NumOfPeople").value;
  console.log(NumOfPeople);

  if (billAmount === "" || serviceQuality === 0 || NumOfPeople === 0) {
    alert("Please fill the Details");
  } else {
    var total = (billAmount * serviceQuality) / NumOfPeople;
    // console.log(total);

    var result = document.getElementById("resultDisp");
    var each = (document.getElementById("each").innerHTML = "each");
    result.innerHTML = `<p>TIP AMOUNT</p><h1><sup>&#8377;</sup>${total.toFixed(2)}</h1>`;
  }
}

//(total = (billAmount*serviceQuality)/
