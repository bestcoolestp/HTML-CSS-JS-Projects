const inputEl = document.getElementById('input');
const errorEl = document.getElementById('error');
const resultEl = document.getElementById('result');

let errorTime;
let resultTime;

function updateResults() {
    console.log(inputEl.value);
    if(inputEl.value <= 0 || isNaN(inputEl.value)) {
        errorEl.innerText = 'Please enter a valid number';
        clearTimeout(errorTime);

        errorTime = setTimeout(() => {
            errorEl.innerText = '';
            inputEl.value = '';
        }, 5000);
    } else {
        resultEl.innerText = (+inputEl.value /2.2).toFixed(2) + '  kg';

        clearTimeout(resultTime);
        resultTime = setTimeout(() => {
            resultEl.innerText = '';
            inputEl.value = '';
        }, 10000);
    }
}

inputEl.addEventListener('input', updateResults);