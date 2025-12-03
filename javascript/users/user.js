promise = fetch('https://fakestoreapi.com/users')
promise.then((res) =>(res.json())).then((result)=>{
    console.log(result);
    users=result
    data=``
    users.forEach(user=>{
        data +=`
         <tr>
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.name.firstname} ${user.name.lastname}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.address.city}</td>
        </tr>
        `
    });
    document.getElementById("user").innerHTML=data
    
})