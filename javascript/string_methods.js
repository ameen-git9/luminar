// string methods

// s="hello world"
// num=123
// console.log(s.length);
// s2=num.toString()
// console.log(typeof s2);


// s="  HELLO  WORLD "
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());

// console.log(s[0]);
// console.log(s.charAt(0));
// console.log(s.at(0));

// console.log(s.trim());
// console.log(s.trimStart());
// console.log(s.trimEnd());

// console.log(s.split());

// console.log(s.slice(0,6));
// console.log(s.substring(0,7));
// console.log(s.substr(0,8));

// console.log(s.padStart());

// num=5
// s=num.toString()
// console.log(s.padStart(5,0));
// console.log(s.padEnd(5,0));


// Date

// let today=new Date
// console.log(today);
// y=today.getFullYear()
// m=today.getMonth()
// d=today.getDay()
// d1=d.toString().padStart(2,0)

// fulldate=`${y}-${m}-${d1}`
// console.log(fulldate);



// s="hello world"
// console.log(s.replace("l","z"));   //out:- hezlo world
// console.log(s.replaceAll(/l/g,"r"));   //out:- herro worrd
// console.log(s.concat(" ","hates"));    //out:- hello world hates


// s="hello"
// pattern=/l/i
// x=s.match(pattern)
// log

// -----------------------------------------------------------------


          // Array methods

// arr1=[100,200,300,400,500]
// console.log(arr1[0]);
// // console.log(arr1);
// console.log(arr1.pop());  // remove from end
// // console.log(arr1);
// console.log(arr1.shift());  // remove from start
// console.log(arr1);
// arr1.push(1000)    //add end
// console.log(arr1);
// arr1.unshift(1,2,3,4,5)   //add first
// console.log(arr1);

// console.log(delete arr1[1]);      // [ <1 empty item>, 200, 300, 400, 500 ] delete 
// console.log(arr1);

// console.log(arr1.slice(2,4));   //[ 300, 400 ]

// arr1.splice(2,0,1000)     //[ 100, 200, 1000, 300, 400, 500 ]
// console.log(arr1);

// arr1.splice(2,2,1000)     //[ 100, 200, 1000, 400, 500 ]
// console.log(arr1);


// console.log(arr1.lenght);
// console.log(arr1.at(0));


// -----------------------------------------------------------


                            // Arrow function - anonymous function


// (arguments)=>(exp)
// x=>()
// y=>{}

// function fun(){
//     return "hello"
// }

// fun()

// let f=(x,y)=>{
//     console.log(x);
//     console.log(y);

//     return x+y
    
// }
// console.log(f(2,3));




                        // asynchronous


// console.log("welcome");
// setTimeout(()=>{
//     console.log("asynchronous(timer)");
    
// },2000)

// console.log("tata bye");



//            promise -  fulfilled, pending, rejected

let promise=new Promise(function(resolve,reject){     // anonymous function
    let data=true
    if(data){
        resolve("fulfilled")
    }
    else{
        reject("rejected")
    }
})

promise.then((result)=>{   // arrow function
    console.log(result);
    
}).catch((error)=>{
    console.log(error);  
})

