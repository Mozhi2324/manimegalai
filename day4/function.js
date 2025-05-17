var sum=()=>[
    console.log(10+20)
]
sum()
const sub=()=>[
    console.log(20-10)
]
sub()
var n=1
sum=0
function eadd()
{
    while(n<=10)
    {
        if(n%2==0)
        { 
            console.log(n)
        sum=sum+n;
        }
        n++
        }
        console.log(`the sum is${sum}`)
}
eadd()