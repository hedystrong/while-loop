//Task tegsh too oloh
let count = 1;
let result = " ";

while (count <= 100) {
    if (count % 2 == 0){
        result += count + " ";
    }
   
    count++;
}
console.log(result);

//Task sondgoi too oloh
let count1 = 1;
let result1 = " ";  
let odd = "";

while (count1 <= 100) {
    if (count1 % 2 == 0){

        odd = count1 - 1;
        result1 += odd + " ";
    }

    count1++;
}
console.log(result1);

//Task niilber oloh
let too = prompt("too oruulna uu");
let sum = 0;
let a = 0;
while(a<too){
    a++;
    sum=sum+a;
}
console.log(sum);