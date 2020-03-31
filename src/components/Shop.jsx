import React, {useEffect} from 'react'
import {connect} from "react-redux";
import Header from "./Header/Header";
import ProductsFilter from "./ProductsFilter/ProductsFilter";
import Products from "./Products/Products";
import {getProducts, selectBrandFunc} from "../redux/shopReducers";
import PaginationProducts from "./PaginationProducts/PaginationProducts";
import Preloader from "./common/Preloader";
import Error from "./common/Error";

const Shop = ({getProducts, products, page, totalCount, filterProducts, selectBrandFunc, selectBrand, isFetching, isError, error}) => {
    useEffect(() => {
        getProducts()
    }, []);
    if(isError){
        return <Error>{error}</Error>
    }
    return <div>
        <Header/>

        <ProductsFilter filterProducts={filterProducts}
                        getProducts={getProducts}
                        selectBrandFunc={selectBrandFunc}
                        selectBrand={selectBrand}
        />
        {
            isFetching? <Preloader/> :
            <div className="products-wrap">
                <Products isFetching={isFetching} products={products}/>
                <PaginationProducts page={page} totalCount={totalCount} getProducts={getProducts}/>
            </div>
        }
    </div>
}
let mapStateToProps = (state) => ({
    test: state.shop.test,
    products: state.shop.products,
    page: state.shop.page,
    totalCount: state.shop.totalCount,
    filterProducts: state.shop.filterProducts,
    selectBrand: state.shop.selectBrand,
    isFetching: state.shop.isFetching,
    isError: state.shop.isError,
    error: state.shop.error,

});


export default connect(mapStateToProps, {getProducts, selectBrandFunc})(Shop)