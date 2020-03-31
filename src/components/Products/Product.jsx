import React from 'react'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const Product = ({product}) => {
    const useStyles = makeStyles(theme => ({
        root: {
            maxWidth: 345,
            margin: '10px auto'
        },
        brand: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        price: {
            display: 'flex',
            justifyContent: 'flex-end',
            marginLeft: 'auto!important'

        },
        wrapButton: {
            position: 'relative'
        },

    }));

    const classes = useStyles();
    return (
        <>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="360"
                        image={product.img}
                        title={product.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {product.name}
                        </Typography>
                        <Typography className={classes.brand} variant="body2" color="textSecondary" component="p">
                            <span>Brand: {product.brand}</span> <small>{product.artnumber}</small>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.wrapButton}>
                    <Button disabled={Boolean(product.stock)} size="small" color="primary">
                        Buy
                    </Button>
                    <Button disabled={Boolean(product.stock)} size="small" color="primary">
                        Add Busked
                    </Button>
                    <Typography variant="body2" className={classes.price} color="secondary">
                        {!product.stock ?
                            <strong>{product.price}$</strong> :
                            <span>not available</span>}
                    </Typography>
                </CardActions>
            </Card>


        </>
    )
}
export default Product