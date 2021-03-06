import React, {useState, useEffect } from 'react'

import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Checkout from './components/CheckoutForm/Checkout/Checkout'
// import Checkout from '/components/CheckoutForm/Checkout/Checkout/checkout'
// import { Products, Navbar } from './src/components/Products/index' this was supposed to make it easier to link 
import Cart from './components/Cart/Cart';
import  { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    // const fetchCart = async () => {
    //     const cart = await commerce.cart.retrieve();
    //     setCart(cart)
    // }
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);

        //setCart(item.cart); Destructured from the respone object below (changed const respone to {cart})
        setCart(cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId,  {quantity});

        //set(respone.cart); Destructured below
        setCart(cart); 
    }

    const handleRemoveFromCart = async (productId) => {
        const {cart } = await commerce.cart.remove(productId);

        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();

        setCart(response.cart);
    }
    // const handleEmptyCart = async ()=> {
    //     const { cart } = await commerce.cart.empty();
        
    //     setCart(cart);
    // }


    useEffect(() => {
        fetchProducts();
        fetchCart()
    }, []);

   

    return (
        <Router> 
            <div>
            <Navbar totalItems={cart.total_items} />
            <Switch>
                <Route exact path="/">
                   <Products products={products} onAddToCart={handleAddToCart} />
                </Route>

                <Route exact path="/cart">
                <Cart 
                cart= {cart} 
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCar={handleEmptyCart}
                />
                </Route>
                <Route exact path="/checkout">
                    <Checkout/>
                </Route>
            </Switch>
        
        </div>


        </Router>
        
    )
}

export default App
 