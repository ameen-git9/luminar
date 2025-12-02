students=[
    {id:1,name:'ameen',place:'calicut'},
    {id:2,name:'ameer',place:'calicut'},
    {id:3,name:'aman',place:'malappuram'},
    {id:4,name:'fahu',place:'calicut'},
    {id:5,name:'anu',place:'calt'},
]

data=``
students.forEach((stud)=>{
    data+=`
            <tr>
                <td>${stud.id}</td>
                <td>${stud.name}</td>
                <td>${stud.place}</td>
                
            </tr>
    
    `
    console.log(data);
    
})

document.getElementById("tbody").innerHTML=data