import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import Product from './Product/Product';
import './Shop.css'

const Shop = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [display,setDisplay] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setDisplay(data)
            })
    }, []);
    const addToCart = (item) => {
        const newCount = [...cart, item];
        setCart(newCount)
    }
    const search = event => {
        const searchvalue = event.target.value;
        const searchItem = product.filter(product => product.name.toLowerCase().includes(searchvalue.toLowerCase()));
        setDisplay(searchItem)
    }
   
    return (
        <div>
            <div onChange={search} className="search-content">
                <input type="text" placeholder="Search" />
            </div>
            <div className="shop">
            <div className="product-container">
                {
                    display.map(product => <Product
                        key = {product.key}
                        product={product}
                        addToCart = {addToCart}
                    >   
                    </Product>)
                }
            </div>
            <div className="cart-summry">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
        </div>
    );
};

export default Shop;