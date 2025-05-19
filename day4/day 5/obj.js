var obj={name:"mozhi",dept:"computer science"}
for(var key in obj){
console.log(key)
console.log(obj[key])
}
var arr=[1,2,3,4]
var arr2=[...arr,5,6,7,8,9,10]   //spread operator
var arr3=[...arr2,11,12,13,14,15]
console.log(arr3)
var marks=[90,40,30,50,"fail"];
var [m1,m2,m3,m4,m5]=marks;   //destructuring 
console.log(m1)
console.log(m2)
console.log(m3)
console.log(m4)
console.log(m5)
function sayhi(){
    console.log("hii")
}
function saybye(){
    console.log("bye")
}
function demo(name,callback){    //callback function
    console.log("hello" +name)
    callback()
}
demo("mozhi",sayhi)
demo("mozhi",saybye)