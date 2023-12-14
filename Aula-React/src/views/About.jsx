import { useState, useEffect } from 'react'
import axios from 'axios'



export default function About() {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        <div>
            <h1>About</h1>
            <hr />
            {
                products.map((products, index) => (

            <div key={index}>
            <h2>{products.title}</h2>
            <h2>{products.price}</h2>
            </div>
                ))
            }
        </div>
    )
}