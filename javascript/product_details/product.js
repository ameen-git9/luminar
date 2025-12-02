promise=fetch('https://fakestoreapi.com/products')
promise.then((res)=>(res.json())).then((result)=>{
    console.log(result);
    products=result
    
})