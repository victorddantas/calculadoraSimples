const result1 = document.getElementById("result");
const equal = document.getElementById("equal");

function insert(value) {
    result1.innerHTML += value;
}

function clean() {
    result1.innerHTML = "";
}

function backspace() {
    if (result1.textContent) {
        let result = document.getElementById("result").innerHTML
        result1.innerHTML = result.substring(0, result.length - 1);
    }
}

function calc() {
    try {
        if (result1 != "Erro") {
            document.getElementById("result").innerHTML = eval(result1.innerHTML)
        }
    }
    catch (error) {
        result1.innerHTML = "Erro"

    }

}