// console.log("ameen");
// s='hello'
// d="hello"
// f='javascript'
// console.log(typeof d);
// -----------------------------------------------------------------------------

// keywords :- let = local, var = global, const = local


// let x=55
// {
//     let x=60
//     console.log("inside:",x);
    
// }
// console.log("outside:",x);


// var x=105
// {
//     var x=205
//     console.log("inside:",x);
    
// }
// console.log("outside:",x);

// o/p :- inside: 205
//        outside: 205


// const x=55
// {
//     const x=60
//     console.log("inside:",x);
    
// }
// console.log("outside:",x);


// const pi = 3.14

// ---------------------------------------------------------------------

// num= 10.55
// console.log(typeof num);

// o/p :- number


// num= 10
// console.log(typeof num);

// o/p :- number

// ----------------------------------------------------------

// DATA TYPES 
// String, Boolean, Number

// s='hello'
// console.log(typeof s);
// o/p :- String

// num=10.3
// console.log(typeof num);
// o/p :- Number

// b=false
// console.log(typeof b);
// o/p :-boolean

// -------------------------------------------------------------------

// let x
// console.log(typeof x);  o/p :-undefined
// console.log("hello"/2);  o/p :-NaN (not a number)


// -----------------------------------------------------------

// Object :- keyword and Array

// array

// arr1=[1,2,3,4,5]
// console.log(arr1);         o/P :- [ 1, 2, 3, 4, 5 ]
// console.log(typeof arr1);   o/p :- Object


// person={name:"ameen",place:"calicut"}
// console.log(person);              o/p :- { name: 'ameen', place: 'calicut' }
// console.log(typeof person);       o/p :- Object


// ------------------------------------------------------------

//           operators

// arithematic operator

// let num1=10
// console.log(num1++); // posr-increment   o/p :- 10

// let num2=20
// console.log(++num2);  //pre-increment    o/p :- 21



// x=6
// y=++x
// console.log(x);  //o/p:- 7
// console.log(y);  //o/p:- 7


// x=6
// y=x++
// console.log(x);  //o/p:- 7
// console.log(y);  // o/p:- 6



// assignment operators - =,+=

// relational operators -m <,>,=<, !=, == (checks value), === (checks data type and data)

// a = 10
// b = "10"

// a==b - true
// a===b - false


// logical operators - &&, ||, !

// console.log(!(true)); - false

// bitwise oprator - &, | 
// console.log(1&2); -0




// Ternery operator ?:

// num =12
// if(num<18){
//     console.log("not eligible");
    
// }
// else{
//     console.log("eligible");
    
// }

// so simple 

// console.log(num<18?"not eligible":"eligible");  - after ? true then : else

// a = parseInt(prompt("enter the 1st number"))
// b = parseInt(prompt("enter the 1st number"))         //it will only see in html, error will shows the console
// c = parseInt(prompt("enter the 1st number"))

// if (a>b && a>c){
//     // console.log(`${a} is large`);
//     alert(`${a} is large`);
    
// }else if(b>c){
//     // console.log(`${b} is big`);
//     alert(`${b} is big`);
    
// }else{
//     // console.log(c," is big");
//     alert(c," is big");
    
// }

// parseInt() - consider only int value - igonore the point values
// parseFloat() - consider float


// switch case 

// day =15
// switch(day){
//     case 1:
//         console.log("day One");
//         break;
//     case 2:
//         console.log("day One");
//         break;
//     default:
//         console.log("else");   
//         }




// looping statements - for, do while, while 

                                                        // for 
// for (let i=1;i<11;i++){
//     console.log(i);
    
// }

// out 
// 1,2,3,4,5,6...,10    



// for/in - index
// for/of - data


// s= "welcome"
// console.log(s.length);   //7

// for(let i in s){
//     console.log(i);   //in - index no. will print
// }


// s= "welcome"
// for(let i of s){
//     console.log(i);     //of - ch will print
// }



// largest 

// arr =[12,555,14,79,55]
// largest = 0
// for (let i of arr){
//     if (largest < i){
//         largest=i
//     }
// }
// console.log(largest);


// let i=1
// while(i<11){
//     console.log(i);
//     i++
    
// }

         //reverse & check palindrome


// num = 123
// temp=num
// rev = 0
// while(num>0){
//     rem=num%10
//     rev=rev*10+rem
//     num=parseInt(num/10)
// }
// console.log(rev);
// console.log(num);
// if(temp==rev){
//     console.log('${temp}is palindrome')
// }
// else{
//     console.log('${temp} is not palindrome');
    
// }
 

       // do-while

// let i=1
// do{
//     console.log(i);
//     i++
    
// }
// while(i<11)

// -----------------------------------------------

        // functions

// function findSum(a,b){
//     console.log(a+b);
    
// }
// findSum(10,20)
// findSum(10,45)
// findSum(10,90)


          // spread operator

//destructoring

arr1=[1,2,3]
arr2=[4,5,6]
arr3=[...arr1,...arr2]
console.log(arr3);

obj1={name:'ameen',place:'calicut'}
obj2={email:'ameen@gmail.com'}
obj3={...obj1,...obj2}
console.log(obj3);

// hooks

arr1=[10,20,30,40,50]
let [a,b,c]=arr1
console.log(a);
console.log(b);
console.log(c);



