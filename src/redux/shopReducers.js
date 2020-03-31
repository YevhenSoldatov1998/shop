import {productsAPI} from '../services/productsAPI';

//CONSTANTS
const GET_PRODUCTS = 'store/storeReducer/GET_PRODUCTS';
const GET_PRODUCTS_ERROR = 'store/storeReducer/GET_PRODUCTS_ERROR';
const IS_FETCHING = 'store/storeReducer/IS_FETCHING';
const SET_PAGE = 'store/storeReducer/SET_PAGE';
const SELECT_BRAND = 'store/storeReducer/SELECT_BRAND';

//ACTION CREATORS
const getProductsSuccess = (products) => ({type: GET_PRODUCTS, products});
const getProductsError = (error, isError) => ({type: GET_PRODUCTS_ERROR, error, isError});
const toggleIsFetching = (isFetching) => ({type: IS_FETCHING, isFetching});
const setPage = (page, totalCount) => ({type: SET_PAGE, page, totalCount});
export const selectBrandFunc = (brands) => ({type: SELECT_BRAND, brands});

//THUNK CREATORS
export const getProducts = (page = 1 , limit = 4) => async (dispatch, getState) => {
    try {
        dispatch(toggleIsFetching(true));
        const response = await productsAPI.getProducts(page, limit, getState().shop.selectBrand);
        const pages = response.headers["x-total-count"];
        const products = response.data;
        const totalCount = Math.ceil(+pages / 4);
        dispatch(setPage(page, totalCount));
        dispatch(getProductsSuccess(products));
        dispatch(getProductsError('', false));
        dispatch(toggleIsFetching(false));
    } catch (e) {
        dispatch(toggleIsFetching(true));
        dispatch(getProductsError(e, true));
        dispatch(toggleIsFetching(false));
    }
}
const initialState = {
    products: [],
    isFetching: false,
    isError: false,
    error: '',
    page: null,
    totalCount: null,
    filterProducts: ['Apple','Samsung', 'Xiaomi', 'Meizu'],
    selectBrand: []
}
export const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state, products: action.products
            };
        case GET_PRODUCTS_ERROR:
            return {
                ...state, error: action.error, isError: action.isError
            }
        case SET_PAGE:
            return {
                ...state, page: action.page, totalCount: action.totalCount
            };
        case SELECT_BRAND:
            return {
                ...state, selectBrand: action.brands
            };
        case IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state
    }
}