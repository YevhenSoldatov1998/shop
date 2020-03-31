import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import FilterListIcon from '@material-ui/icons/FilterList';
import Chip from "@material-ui/core/Chip";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: theme.spacing(0.5),
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));
const ProductsFilter = ({filterProducts, getProducts, selectBrand, selectBrandFunc}) => {
    const classes = useStyles()
    const [isShowFilter, setIsShowFilter] = useState(false);
    const onFilter = () => {
        setIsShowFilter(!isShowFilter)
    };
    const [selectFilter, setSelectFilter] = useState(selectBrand);

    const handleSelect = (element) => {
        if (!selectFilter.includes(element)) {
            setSelectFilter([...selectFilter, element]);
        } else {
            let pullSelect = selectFilter.filter(select => select !== element);
            setSelectFilter(pullSelect);
        }
    };
    const handleClear = () => {
        setSelectFilter([]);
    }

    useEffect(() => {
        selectBrandFunc(selectFilter);
        getProducts(1, 4);
    }, [selectFilter]);

    return (
        <div className={'productsFilter'}>

            {isShowFilter &&
            <div>
                {selectBrand.length>0 && <Button size={"small"} onClick={handleClear}>CLEAR ALL </Button>}
                {filterProducts.map(title =>
                    <Chip
                        onClick={() => handleSelect(title)}
                        key={title}
                        label={title}
                        color={selectFilter.includes(title) ? "primary" : "default"}
                        className={classes.chip}
                    />)
                }
            </div>
            }
            <Button onClick={onFilter}>
                <FilterListIcon/>
            </Button>
        </div>
    )
}
export default ProductsFilter;