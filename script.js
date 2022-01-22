// ----------------Task 1-----------------
function getArea(number) {
    if (number == undefined){
        console.log ('Будь ласка, введіть радіус!')
    }
    else if (isFinite(number)){
      console.log(Math.round(number * number * Math.PI));
    }
    else {
        console.log ('Повинно бути числове значення!')
    }
}
getArea(5);
// ----------------Task 2-----------------
function getSqrt(number) {
    if (number == undefined){
        console.log ('Будь ласка, введіть число!')
    }
    else if (number <= 0){
        console.log ('Введіть додатнє число!');
    }
    else if (isFinite(number)){
      console.log(Math.round(Math.sqrt(number)));
    }
    else {
        console.log ('Повинно бути числове значення!');
    }
}
getSqrt(16);
// ----------------Task 3-----------------
let MyMath = {
    pi: 3.14, 
    pow(number, degree) {
        if (number == undefined && degree == undefined) {
           console.log ('pow', 'Будь ласка, введіть число!')
        }
        else if(isFinite(number) && isFinite(degree)) {
            console.log('pow', number * degree);
        }
        else {
            console.log ('pow', 'Повинно бути числове значення!');
        }
    },
    abs(number) {
        if (number == undefined) {
            console.log ('abs','Будь ласка, введіть число!');
        }
        else if((number) >= 0) {
            console.log('abs', number);
        }
        else if ((number) < 0){
            console.log('abs', number * -1);
        }
        else {
            console.log ('abs', 'Повинно бути числове значення!');
        }
    },
    max(...arg) {
        if (arg.length == 0) {
            console.log ('max','Будь ласка, введіть число!'); 
        }
        else if(isFinite(arg[0])) {
            let maxElem = -Infinity;
            for (i = 0; i < arg.length; i++) {
                if(arg[i] > maxElem) {
                    maxElem = arg[i];
                }
            }
            console.log('max', maxElem);
        }
        else {
            console.log ('max', 'Повинно бути числове значення!');
        }
    },
    min(...arg) {
        if (arg.length == 0) {
            console.log ('min','Будь ласка, введіть число!'); 
        }
        else if(isFinite(arg[0])) {
            let minElem = Infinity;
            for (i = 0; i < arg.length; i++) {
                if(arg[i] < minElem) {
                    minElem = arg[i];
                }
            }
            console.log('min', minElem);
        }
        else {
            console.log ('min', 'Повинно бути числове значення!');
        }
    }
};
console.log('pi', MyMath.pi);
MyMath.pow(2,5);
MyMath.abs(-5);
MyMath.max(4,6,3,2);
MyMath.min(4,5,3,5,6);