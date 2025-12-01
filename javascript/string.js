// string methods

// s="hello world"
// num=123
// console.log(s.length);
// s2=num.toString()
// console.log(typeof s2);


s="  HELLO  WORLD "
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

let today=new Date
console.log(today);
y=today.getFullYear()
m=today.getMonth()
d=today.getDay()
d1=d.toString().padStart(2,0)

fulldate=`${y}-${m}-${d1}`
console.log(fulldate);





