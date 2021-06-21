import { Typography } from '@material-ui/core'
import React from 'react'
import {Card, CardMedia, CardContent, CardActions, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles';


const Products = ({ product, onAddToCart  }) => {
    const classes = useStyles()

    // console.log(product);
    // return <div>test</div>
    //used to test what the array or products is returning from the API

    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
                <CardContent>
                        <div className={classes.cardContent}>
                                <Typography variant="h5" gutterBottom>
                                    {product.name}
                                </Typography>
                                <Typography variant="h5">
                                    {product.price.formatted_with_symbol}
                                </Typography>
                        </div>
                        <Typography dangerouslySetInnerHTML={{__html:product.description}} variant="body2" color="textSecondary"></Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Card" onClick={() => onAddToCart(product.id, 1)}> 
                        <AddShoppingCart/>
                    </IconButton> 

                </CardActions>

            </Card>
        </div>
    )
}

export default Products
