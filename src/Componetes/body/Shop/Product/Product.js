import React from 'react';
import Rating from 'react-rating';
import './Product.css';

const Product = (props) => {
   console.log(props.product)
    const {img,name,price,seller,stock,star} = props.product;
    return (
        <div className="products">
            <div className="pro-img">
                <img src={img} alt="" />
            </div>
            <div className="pro-item">
                <h3>{name}</h3>
                <p>by : {seller}</p>
                <h2>Price : ${price}</h2>
                <p>only {stock} left in stock - order soon</p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon"
                    fullSymbol="fas fa-star icon"
                readonly>
                </Rating>
                <br />
                <button onClick={() => props.addToCart(props.product)}>add to cart</button>
            </div>
        </div>
    );
};

export default Product;