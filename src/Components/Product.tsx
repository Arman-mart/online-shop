import React from 'react';
import {IProduct} from '../types'


interface productProps{
    product: IProduct
}

const Product = (props:productProps) => {
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default Product;