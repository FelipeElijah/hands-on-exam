
function fibonacciSeries(numberOfSequence){
let FirstNumber, SecondNumber, result;
FirstNumber = 0;
SecondNumber = 1;
result = SecondNumber;

    for(let i = 1; i<= numberOfSequence; i++){

        result = FirstNumber + SecondNumber ;
        FirstNumber = SecondNumber;
        SecondNumber = result;
        console.log(result);
    }
}

fibonacciSeries(5);