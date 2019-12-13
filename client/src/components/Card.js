import React from "react";

export default function Card(props) {
    // PRODUCTS PROP destructuring;

    const {
        Product_image,
        Product_name,
        Price,
        Product_Description
    } = props.productsProp;
    return (
        <article className="card">
            <img src={Product_image} alt={Product_name} />
            <h2>{Product_name}</h2>
            <p className="card-price">{Price}</p>
            <p className="card-description">{Product_Description}</p>
            <p>
                <button>Add to Cart</button>
            </p>
        </article>
    );
}
