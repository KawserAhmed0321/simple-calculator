let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');

let screenValue ='';

for (item of buttons) {
    item.addEventListener('click', function(e){
        buttonText = e.target.innerText;
        
        console.log(buttonText);

        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.Value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.Value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
};