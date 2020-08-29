let total = 0;

//In App Variables
let totalAmt = document.getElementById("totalAmt");

let serviceQual = document.getElementById("serviceQual");

let noOfPeople = document.getElementById("no");

let calc = document.getElementById("calc");

let result = document.getElementById("result");

let resetBtn = document.getElementById("resetBtn");

//ShowResetButton
function showTipText() {
   document.getElementById("tip").style.display = "block";
}

//Calculate Button
calc.addEventListener("click", function calculateTip(){
    totalAmt = Number(totalAmt.value);
    noOfPeople = Number(noOfPeople.value);
    serviceQual = Number(serviceQual.value);

    //Checking If A box is empty
    if(totalAmt == 0 || serviceQual == 0){
        alert("Fill All The Box Appropriately");
    }
    //Checking If A box has a value less than 1
    if(totalAmt == 0  || noOfPeople <= 1){
        result.textContent = "Enter All The Values";
    }
     total = (totalAmt * serviceQual) / (noOfPeople);

    total.toFixed(2);
    
    result.textContent = "$ " + total + " each";

    document.getElementById("container").style.height = "560px";

    showTipText();
});
