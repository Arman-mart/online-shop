import React from 'react';
import {IProduct} from '../types'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




interface productProps{
    product: IProduct
}

const Product = ({product}:productProps) => {
    return (
        <div>
            <h1>{product.price}</h1>
        </div>
    );
};

export default Product;