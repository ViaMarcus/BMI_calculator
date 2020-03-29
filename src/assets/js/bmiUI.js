const sizebox = document.getElementById('height');
const massbox = document.getElementById('weight');
const submitbtn = document.getElementById('submit');
const histdiv = document.getElementById('hist');
const nohistdiv = document.getElementById('nohist');
const resultdiv = document.getElementById('result');
const histtable = document.getElementById('histtable')

var size;
var mass;
let resultBMI;
let classification;
function buttonClickFunc() {
    size = parseFloat(sizebox.value);
    mass = parseFloat(massbox.value);
    if (Number.isNaN(size)) {size = 0}
    if (Number.isNaN(mass)) {mass = 0}
    resultBMI = calcBmi(size, mass).toFixed(2);
    classification = calcClass(mass,size);
    result.innerHTML= `<p>Your BMI is ${resultBMI} and you are ${classification.toLowerCase()}</p>`;
    result.classList.remove("invisible");
    result.classList.add("visible");
    addHistEntry(mass,size,resultBMI,classification);

}
function addHistEntry(mass, size, BMI, classification) {
    histtable.innerHTML += 
    `<tr>
    <td>${mass}</td>
    <td>${size}</td>
    <td>${BMI}</td>
    <td>${classification}</td>
    </tr>`;
    nohistdiv.classList.remove('visible');
    nohistdiv.classList.add('invisible');
    histdiv.classList.add('visible');
    histdiv.classList.remove('invisible');
}