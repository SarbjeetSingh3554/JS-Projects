const button=document.querySelector('form')

button.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.getElementById('height').value)
    const weight=parseInt(document.getElementById('weight').value)

    const result=document.getElementById('results')
    if(height===''||height<0||isNaN(height)){
        result.innerHTML='Please enter a valid height'
    }else if(weight===''||weight<0||isNaN(weight)){
        result.innerHTML='Please enter a valid weight'
    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        result.innerHTML=`<span>${bmi}</span>`
    }

})