// To calculate sum of 100 natural numbers

function sumOfNatural(n){
    let sum=0;
    for(i=1;i<=n;i++){
        sum+=i
    }
    return sum;
}
const result=sumOfNatural(100)
console.log(result)