import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const PaginationProducts = ({page, getProducts, totalCount}) => {
    const classes = useStyles();
    const handleClick = (e, p) => {
        if(p !== page){
            getProducts(p)
        }
    }
    return (
        <div className={classes.root}>
            <Pagination count={totalCount} page={page} onChange={handleClick} color="primary"/>
        </div>
    )
}
export default PaginationProducts