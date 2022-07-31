import React          from 'react';
import {productProps} from '../types'
import Card           from '@mui/material/Card';
import CardContent    from '@mui/material/CardContent';
import CardMedia      from '@mui/material/CardMedia';
import Typography     from '@mui/material/Typography';
import Button         from '@mui/material/Button';
import { useState }   from  "react";


const Product = ({ product }: productProps) => {

    const [details, setDetails] = useState(false)

    return (
        <Card sx={{maxWidth: 345}}>
            <CardMedia
                component="img"
                height="80"

                image={product.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>

                <Button
                    size='small'
                    onClick = {() => setDetails(prev => !prev)}> {details ? 'Hide Details' : 'Show Details'}
                </Button>

                { details && <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography> }

                <Typography variant='h5'>
                    {product.price}$
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Product;






















