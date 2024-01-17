
document.addEventListener('DOMContentLoaded',()=>{
const numOutPut = document.getElementsByClassName('number-output')[0];
const cvcOutput = document.getElementsByClassName('cvc-output')[0];
const nameOutput = document.getElementsByClassName('name-output')[0];
const monthOutput = document.getElementsByClassName('month-output')[0];
const yearOutput = document.getElementsByClassName('year-output')[0];
const nameInput = document.getElementsByClassName('name-input')[0];
const CardNumberInput = document.getElementsByClassName('number-input')[0];
const MonthInput = document.getElementsByClassName('date month-input')[0];
const yearInput = document.getElementsByClassName('date year-input')[0];
const cvcInput = document.getElementsByClassName('cvc-input')[0];
const btnConfirm = document.getElementById('btnConfirm');
const modal = document.querySelector('.modal');
const inputs = document.querySelectorAll('input');
const modalClose = document.querySelector('.close');


btnConfirm.addEventListener('click',(e)=>{
e.preventDefault();
const cardNumVlu = CardNumberInput.value;
const nameVlu = nameInput.value;
const MonthInputVlu = MonthInput.value;
const yearInputVlu = yearInput.value;
const cvcInputVlu = cvcInput.value;

numOutPut.innerHTML=cardNumVlu;
cvcOutput.innerHTML=cvcInputVlu;
nameOutput.innerHTML=nameVlu;
monthOutput.innerHTML=MonthInputVlu;
yearOutput.innerHTML=yearInputVlu;

modal.style.display = "flex";
modalClose.addEventListener('click',()=>{
    modal.style.display = 'none';
})

inputs.forEach(input=>{
    if(input.classList.contains('name-input')){
        containsNameInput(input)
    }else if(input.classList.contains('date')){
        containsDateInput(input)
    }else{
        containsOtherInput(input)
    }

    if (input.parentElement.classList.contains('error-empty') ||
        input.parentElement.classList.contains('error-invalid') ||
        input.parentElement.parentElement.classList.contains('error-invalid') ||
        input.parentElement.parentElement.classList.contains('error-empty')) {
        modal.style.display = 'none';
    }
})
})
})

const containsNameInput = function(input){
    if(input.value === ''){
        input.parentElement.classList.add('error-empty');
        input.parentElement.classList.remove('error-invalid');
    }else if(input.value !== '' && input.value.match(/^[0-9]+$/) !== null){  // wil return null if value has number
        input.parentElement.classList.remove('error-empty');
        input.parentElement.classList.add('error-invalid');
    }
    else{
        input.parentElement.classList.remove('error-empty');
        input.parentElement.classList.remove('error-invalid');
    }
}
const containsDateInput = function(input){
    if(input.value === ''){
        input.parentElement.parentElement.classList.add('error-empty');
        input.parentElement.parentElement.classList.remove('error-invalid');
    }else if(input.value !== '' && input.value.match(/^[0-9]+$/) === null){  // wil return null if value has anything accept number
        input.parentElement.parentElement.classList.remove('error-empty');
        input.parentElement.parentElement.classList.add('error-invalid');
    }else{
        input.parentElement.parentElement.classList.remove('error-empty');
        input.parentElement.parentElement.classList.remove('error-invalid');
    }
}

const containsOtherInput = function(input){
    if(input.value === ''){
        input.parentElement.classList.add('error-empty');
        input.parentElement.classList.remove('error-invalid');
    }else if(input.value !== '' && input.value.match(/^[0-9]+$/) === null){
        input.parentElement.classList.remove('error-empty');
        input.parentElement.classList.add('error-invalid');
    }else{
        input.parentElement.classList.remove('error-empty');
        input.parentElement.classList.remove('error-invalid');
    }
    }
