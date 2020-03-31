import React from 'react'
import Product from "./Product";
import {Typography} from "@material-ui/core";


const Products = ({products}) => {
    return (

        <div className="products">
            {
                products.length > 0 ? products.map(product => {
                    return <Product key={product.name + product.artnumber} product={product}/>
                }) : <Typography variant="h2"> Products is empty</Typography>

            }
        </div>
    )
}
export default Products