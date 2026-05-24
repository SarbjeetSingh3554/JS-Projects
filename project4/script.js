const form=document.querySelector('form');
let firstNumber;
let secondNumber;
const start=document.querySelector('#start')

start.addEventListener('click',function(e){
    firstNumber=parseInt(Math.random()*10 + 1);
    secondNumber=parseInt(Math.random()*10 + 1);
    const captcha=`${firstNumber} + ${secondNumber} = `
    form.querySelector('label').innerHTML=captcha;
})

const submit=form.querySelector('#submit')

submit.addEventListener('click',function(e){
    e.preventDefault();
    const answer=parseInt(form.querySelector('input').value);
    if(answer===firstNumber+secondNumber){
        form.querySelector('#result').innerHTML='Access Guranted'
        form.querySelector('label').innerHTML='';
    }else{
        form.querySelector('#result').innerHTML='retry'
    }
})