//define the calculator object
var calculator = {
    screen: '',
    temporaryAnswer: '',
    finalAnswer: '',
    operator: '',
    numberArray: [],
    number: 0,

    /* Methods */
    //calculation
    // come back and do something to control for string length, particularly with decimal points and large numbers
    add: (a,b) => { return a + b },
    sub: (a,b) => { return a - b},
    multiply: (a,b) => { return a * b},
    divide: (a,b) => { return a / b }, 
    percent: (a) => {return a /100},
    equals: (a) => {
        //set final answer
        calculator.finalAnswer = a
        console.log(calculator.finalAnswer + ' ' + a)
        //print to screen
        calculator.printToCalc(a)
    },

    //display
    printToCalc: (num) => { document.getElementById("answer").value=num }
};


function buttonPress(buttonValue) {
    if (!isNaN(buttonValue)) {
        //add buttonValue to an array
        calculator.numberArray.push(buttonValue)
        //join number array so that it gives multiple place values and convert from string to an integer
        calculator.number = Number(calculator.numberArray.join(''))
        //print to screen
        calculator.printToCalc(calculator.number) 
    } else {
        //check for stored operator
        if(!calculator.operator) {
            // set temp ans as number
            calculator.temporaryAnswer = calculator.number
            /* REFACTOR*/
            // clear number
            calculator.number = 0
            calculator.numberArray = []
            // store operator
            calculator.operator = buttonValue
        } else {
            // check what the store operator is and use that function

            // define local variables to use in the function
            var operator = calculator.operator
            console.log('operators   ' + operator)
            var temporaryAnswer = calculator.temporaryAnswer
            console.log('temporaryAnswer    ' + temporaryAnswer)
            var number = calculator.number
            console.log('number   ' + number)
                
            switch (operator) {
                case '+':
                    calculator.temporaryAnswer = calculator.add(temporaryAnswer, number) 
                    console.log(temporaryAnswer + ' + ' + number + ' = ' + calculator.temporaryAnswer )
                    calculator.printToCalc(calculator.temporaryAnswer)
                    break;
                case '-':
                    calculator.temporaryAnswer = calculator.sub(temporaryAnswer, number) 
                    console.log(temporaryAnswer + ' - ' + number + ' = ' + calculator.temporaryAnswer )
                    calculator.printToCalc(calculator.temporaryAnswer)
                    break;
                case '*':
                    calculator.temporaryAnswer = calculator.multiply(temporaryAnswer, number) 
                    console.log(temporaryAnswer + ' * ' + number + ' = ' + calculator.temporaryAnswer )
                    calculator.printToCalc(calculator.temporaryAnswer)
                    break;
                case '/':
                    calculator.temporaryAnswer = calculator.divide(temporaryAnswer, number) 
                    console.log(temporaryAnswer + ' / ' + number + ' = ' + calculator.temporaryAnswer )
                    calculator.printToCalc(calculator.temporaryAnswer)
                    break;
                default: 
                    console.log('not a known operator')

            }
            /* REFACTOR*/
            // clear number
            calculator.number = 0
            calculator.numberArray = []
            // store operator
            calculator.operator = buttonValue
        }

    // if .
    // if % - dive answer by 100 and return value
    // if AC - reintitilise calculator
    // if CE - clear currrent (remove current number & operator)
    // 
    //if operator do something
    // if = (dont know where to put this yet)
    
    


        
    }

    //console.log(calculator)
}
       




//     else if(buttonValue === '-' /*|| buttonValue === '+' || buttonValue === '/' || buttonValue === '*'*/) {
//         //clear number array and set a as temporary answer
//         number = [];
//         temporaryAnswer = a;
        
//         //the subtract a from temporaryAnswer
//         answer = temporaryAnswer - a
//         console.log(answer)
//         printToCalc(answer)
//     } else if(buttonValue === '.') {
//         console.log('is a decimal point')
//     } else if(buttonValue === '=') {
//         console.log('is an equal sign')
//     }
// }


/*
 } else if(buttonValue === '='){
            calculator.equals(calculator.temporaryAnswer) 
            //console.log('temporaryAnswer is ' + temporaryAnswer + ' number is ' + number)
*/