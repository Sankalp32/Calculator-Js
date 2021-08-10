let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let result = document.getElementById('result');
let screenValue = '';
let history = [];
for(item of buttons){
    item.addEventListener('click', (e) =>{
        buttonText = e.target.innerText;
        console.log("Clicked on ",buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
            
            
        }
        else if (buttonText == 'C') {
            screenValue = " ";
            screen.value = screenValue;
           


            
        }
        else if (buttonText == '=') {

            screen.value = eval(screenValue);

            result.innerHTML = screen.value
            history.push(screen.value)
            showHistory()

           
            


            
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
      
    })

   
}

function showHistory() {
    let string = " ";
    for (const key in history) {

        string += " "+screenValue+" = "+history[key]+" <br/> " + "<hr/>";
          
        
    }
    result.innerHTML = string;    

    
    
}


