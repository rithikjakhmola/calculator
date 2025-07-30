let currentValue = 0 ; 
let secondValue = 0 ; 
const screen = document.querySelector('.screen');
screen.textContent = '';
let cnt = 0 ; 
let operator ; 
function clicking (a){
    if (a == '/' || a=='*'|| a=='+'|| a=='-'){
        operator = a;
        cnt++ ; 
        screen.textContent = currentValue + operator ; 
        return ; 
    }
    if (cnt == 1  ){
        screen.textContent = '..'+ operator ; 
        if ((a>=0 && a <= 9 )){
            secondValue = secondValue * 10 + a ; 
            screen.textContent =screen.textContent + secondValue  ; 
            return ; 
        }
        
    }
    if (cnt >1 ){
        if (a == '/'){
            divide(currentValue)
        }
    }
    currentValue = currentValue * 10+ a ; 
    screen.textContent = currentValue ;
    return ; 
}


