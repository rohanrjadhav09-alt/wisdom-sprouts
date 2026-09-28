

fruits = ["Apple","Orange","banana","grapes","lemon"]
numArray = [1,2,3,4,5,6,7,8,8,9]

fruits.forEach((value, idex) => console.log(value))


numArray.map((elmt,index)=>{
    console.log("Cube of",elmt,"is",elmt**3)
})


evenNum=numArray.filter((num)=>num % 2 == 0)
console.log(evenNum)


oddNum=numArray.filter((n)=>n % 2 != 0)
console.log(oddNum)

let primeNums = numArray.filter(n => {

    if (n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }

    return true;
});

console.log(primeNums);

let square = numArray.filter(n => n % 2 != 0).map(n => n * n);

console.log(square);