// Tu código aquí.

let counterValue = 0;

const buttonLower = document.getElementById("lowerCount");
const buttonAdd = document.getElementById("addCount");

function addOne(){
    counterValue++;
    document.querySelector("#counter").textContent = counterValue;
}

buttonAdd.addEventListener("click", addOne);

function lowOne(){
    counterValue--;
    document.querySelector('#counter').textContent = counterValue
}

buttonLower.addEventListener("click", lowOne);

// if (counterValue >= 1 ) {
//     document.querySelector("#counter").style.color = "green"
// } else if (counterValue <= -1) {
//     document.querySelector("#counter").style.color = "red"
// } else {
//     document.querySelector("#counter").style.color = "black"
// }