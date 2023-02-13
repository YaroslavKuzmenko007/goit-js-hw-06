const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.oninput = function () {
    if (input.value === '') {
       nameOutput.innerHTML = 'Anonymous';
    } 
    nameOutput.innerHTML = input.value;
    
}
