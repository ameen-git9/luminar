promise = fetch('https://fakestoreapi.com/products')
promise.then((res) => (res.json())).then((result) => {
    console.log(result);
    products = result


    data = ``
    products.forEach(prod => {
        data += `
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="${prod.image}" class="card-img-top" alt="" height="300px">
                <div class=" card-body">
                    <h5 class="card-title">${prod.title}</h5>
                    <p class="card-text">${prod.description}</p><br>
                    <p class="card-text">${prod.price}</p><br>
                    <a href="#" class="btn btn-primary"> Go somewhere</a>
                </div>
             </div>
        </div>
  
        `
    });
    document.getElementById("card").innerHTML=data

})