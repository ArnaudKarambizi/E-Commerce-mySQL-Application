import React from "react";

export default function Card(props) {
    // PRODUCTS PROP destructuring;

    const { image, name, price, description } = props.productsProp;
    return (
        <article className="card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p className="card-price">{price}</p>
            <p className="card-description">{description}</p>
            <p>
                <button>Add to Cart</button>
            </p>
        </article>
    );
}
