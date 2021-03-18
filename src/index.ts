import './style.css';

let counter = -1;
const incrementButton = document.getElementById("increment");
const counterDiv = document.getElementById("counter");

function update() 
{
    counter++;
    counterDiv.innerHTML = counter.toString();
}

incrementButton.addEventListener("click", update);
update();