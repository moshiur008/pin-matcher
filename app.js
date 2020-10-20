var incorrectPin = document.getElementById('incorrectPin');
var correctPin = document.getElementById('correctPin');
var pinMatcherBoxValue = document.getElementById('pinMatcherBox').value;

incorrectPin.style.display='none';
correctPin.style.display='none';

document.getElementById('generatePin').addEventListener('click', function(){
    let randomNumber=Math.random();
    let roundRandom = Math.floor((1000 +(randomNumber*9000)));
    document.getElementById('generatePinBox').value = roundRandom;
})

var numbers = document.getElementsByClassName('number');
for(var i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', function(){
        if(this.id == "clear"){
            pinMatcherBoxValue = "";
            document.getElementById('pinMatcherBox').value = pinMatcherBoxValue
        }else if(this.id == "backspace") {
            var pinMatcherBoxString = pinMatcherBoxValue;
            var newpinMatcherBoxString = pinMatcherBoxString.substr(0, pinMatcherBoxString.length-1);
            pinMatcherBoxValue = newpinMatcherBoxString;
            document.getElementById('pinMatcherBox').value = pinMatcherBoxValue
        }else {
        var number = this.innerText;
        pinMatcherBoxValue = pinMatcherBoxValue + number;
        document.getElementById('pinMatcherBox').value = pinMatcherBoxValue;
        }
    })
}

document.getElementById('submit').addEventListener('click', function(){
    //let generatedPin = parseInt(generatedPinValue);
    var typedPin = parseInt(pinMatcherBoxValue);
    var generatedPinValue = document.getElementById('generatePinBox').value;
    if(generatedPinValue == typedPin) {
        correctPin.style.display='block';
        incorrectPin.style.display='none';
        document.getElementById('action-left').style.display ='none';
    }else {
        incorrectPin.style.display='block';
        correctPin.style.display='none';
        var tryLeft = document.getElementById('try-left').innerText;
        var tryLeftNumber = parseInt(tryLeft);
        var newTryLeft = tryLeft - 1;
        document.getElementById('try-left').innerText = newTryLeft;
        if(newTryLeft <= 0) {
            document.getElementById('submit').style.display='none';
        }
    }
})