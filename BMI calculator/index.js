const btnEl = document.getElementById('btn');
const bmiInputEl = document.getElementById('bmi-result');
const weightConditionEl = document.getElementById('weight-condition');

function calculateBMI() {
    const heightValue = document.getElementById('height').value / 100;
    const weightValue = document.getElementById('weight').value;
    
    const bmiValue = weightValue / (heightValue * heightValue);
    const bmiValueRounded = bmiValue.toFixed(2);
    bmiInputEl.value = bmiValueRounded;

    if (bmiValueRounded < 18.5) {
        weightConditionEl.innerText = 'Underweight';
    }else if(bmiValueRounded >= 18.5 && bmiValueRounded <= 24.9) {
        weightConditionEl.innerText = 'Normal';

    }else if(bmiValueRounded >= 25 && bmiValueRounded <= 29.9) {
        weightConditionEl.innerText = 'Overweight';
    } else {
        weightConditionEl.innerText = 'Obesity';
    }    
}

btnEl.addEventListener('click', calculateBMI);