import React, {useState, useEffect } from 'react'

import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
// import { Products, Navbar } from './src/components/Products/index' this was supposed to make it easier to link 

import  { commerce } from './lib/commerce'

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);



    return (
        <div>
            <h1> Welcome to the Fake Store </h1>
            <Navbar/>
            <Products products={products}/>
        </div>
    )
}

export default App
 