var a=5;
var b='five';
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b); 
var a=10;
var b=20;
console.log(`${a}+${b}=${a+b}`)
console.log(`this is ${a}+ a book${b}=javascript${a+b}`)
n=10;
var result=(n%2==0)?"even":"odd";
console.log(result)
sum=0
for(i=1;i<=10;i++)
{
    if(i%2==0)
    {
        console.log(`${i} is even`)
        sum=sum+i;
    }
}
console.log(`the sum is${sum}`)    //add only even numbers