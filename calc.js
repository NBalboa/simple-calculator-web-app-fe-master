const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operator');
let display = document.querySelector('#result');
let erase = document.querySelector('#back');
let clear_all = document.querySelector('#clear');



// if (display.innerHTML.length > 1 || display.innerHTML !== 0){
//   console.log("back to zero")
// }

function operations(num1, num2, operator) {
  switch(operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Invalid operator';
  }
}

clear_all.addEventListener('click', function(){
  display.innerHTML = 0;
  num1 = 0;
  num2 = 0;
  prevOp = '';
  op = 0;
  console.log(num1);
  console.log(num2);
})


erase.addEventListener('click', function() {
  if(display.innerHTML.length > 1){
    let current = display.innerHTML.split('')

    current.pop();

    let newNum = '';

    current.forEach((num) => {
      newNum += num
    })

    console.log(newNum);

    display.innerHTML = newNum;
  }
  else if (display.innerHTML !== 0){
    display.innerHTML = 0
  }
  console.log('i was here')
});

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    if(display.innerHTML === '0') {
      display.innerHTML = number.innerHTML;
    }
    else if(reset){
      display.innerHTML = number.innerHTML;
      reset = false;
    } 
    else {
      display.innerHTML += number.innerHTML;
    }
  });
});



let num1 = 0;
let num2 = 0;
let op = '';
let result = 0;
let prevOp = ''
let reset = false;

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    op = operator.innerHTML;

    //resetter
    
    // if(operator.innerHTML === '='){
    //   num1 = parseInt(display.innerHTML);
    // }

    if(display.innerHTML !== '0') {
      
      if(num1 === 0){
        prevOp = operator.innerHTML;
        console.log("prev " + prevOp);
        num1 = parseInt(display.innerHTML);
        console.log(num1);
        display.innerHTML = 0;
      }
      else if(op === '='){
        num2 = parseInt(display.innerHTML);
        result = operations(num1, num2, prevOp);
        display.innerHTML = result;

        console.log("reset num1 and num2 and operation");
        num1 = 0;
        num2 = 0;
        op = '';
        reset = true;
        // if(num1 === 0 ){
        //   num2 = parseInt(display.innerHTML);
        //   result = operations(num1, num2, prevOp);
        // }
        // num1 = parseInt(display.innerHTML);
        // display.innerHTML = 0;
      }
      else if(prevOp !== '=') {
        op = operator.innerHTML;
        num2 = parseInt(display.innerHTML);

        result = operations(num1, num2, op);
        num1 = result;
        num = 0;
        display.innerHTML = result;
        
      }
      else{
        //do nothing
      }
    }

  });
});


