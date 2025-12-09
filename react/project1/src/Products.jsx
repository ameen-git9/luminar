import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => (res.json()))
            .then((result) => {
                setProducts(result)
            })
    }, [])
    console.log(products);



    return (
        <>
            {
                products.length > 0 ?
                    products.map((prod) => (
                        <div className='d-flex justify-content-center align-content-center flex-column'>
                            <div class="card " style={{ width: '18rem' }}>

                                <img src={prod.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{prod.title}</h5>
                                    <p class="card-text">{prod.description}</p>
                                    <p class="card-text">{prod.price}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    ))
                    : <h2>No products</h2>
            }
        </>
    )
}

export default Products