function appendChar(char) {
    document.getElementById('input').value += char;
}

function clearDisplay() {
    document.getElementById('input').value = '';
    document.getElementById('output').value = '';
}

function deleteChar() {
    var input = document.getElementById('input');
    var output = document.getElementById('output');
    input.value = input.value.slice(0, -1);
    output.value = '';
}
function calculate() {
    var input = document.getElementById('input');
    var output = document.getElementById('output');
    var expression = input.value.replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan').replace(/log/g, 'Math.log10');
    var result = eval(expression);
    output.value = result;
}
