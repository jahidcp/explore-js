function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return "Please submit a valid input number."
    }
    return num1 + num2;
}

const finalResult = add(100, 20);
console.log(finalResult);

// Multiply

function add2(num3, num4){
    if(typeof num3 !== 'number' || typeof num4 !== 'number'){
        return "Please input a valid number."
    }
    return num3 * num4;
}

let finalResult2 = add2(5, "name");
console.log(finalResult2);


// Question Problem Solve
let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 
}
console.log(sum);