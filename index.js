function cal() {
    var inputN = document.getElementById("inputN").value;
    var inputM = document.getElementById("inputM").value;
    var BufM = inputM;
    var sumN = 1;
    var sumM = 1;
    for (var i = 0; i < inputN; i++) {
        sumN *= BufM--;
        sumM *= i + 1;
    }
    var resInput = document.getElementById("res");
    resInput.value = sumN / sumM;
    resInput.style.width = res.value.length * 8 + "px";
}

function changed(inputId) {
    var inputElem = document.getElementById(inputId);
    inputElem.style.width = inputElem.value.length * 8 + 8 + "px";
}