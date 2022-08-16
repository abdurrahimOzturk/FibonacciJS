
function nextFibonacci(n){
    let a = n * (1 + Math.sqrt(5)) / 2.0;
    return Math.round(a);
}

function findFibonacciNumber(num){
    if (num == 0){
        selectedFibonacci = 0;
        return;
    }
let x = 0, y = 1;
 
    let z = x + y;

    while (z <= num) {
 
        x = y;
        y = z;
        z = x + y;
    }
 
    let ans = (Math.abs(z - num)
               >= Math.abs(y - num))
                  ? y
                  : z;
 
    return ans;
}

const selected = prompt("Give me a number");
const selectedFibonacci = findFibonacciNumber(selected);


function printNextFive(num){
    
    const fibonacci1 = nextFibonacci(selectedFibonacci);
    const fibonacci2 = selectedFibonacci + fibonacci1;
    const fibonacci3 = fibonacci2 + fibonacci1;
    const fibonacci4 = fibonacci3 + fibonacci2;
    const fibonacci5 = fibonacci3 + fibonacci4;
    console.log(fibonacci1, fibonacci2, fibonacci3, fibonacci4, fibonacci5);
}

printNextFive(selectedFibonacci);




