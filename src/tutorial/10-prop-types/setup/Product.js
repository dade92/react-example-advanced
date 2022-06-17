import React from 'react';

const Product = ({image, name, price}) => {
    return <article className='product'>
        {/*<img src={image.url} alt={name}></img>*/}
        <h4>{name}</h4>
        <p>{price}</p>
    </article>;
};

export default Product;
