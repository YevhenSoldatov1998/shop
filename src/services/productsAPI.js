import {instance} from "./instance";

export const productsAPI = {
    getProducts: async (page, limit, brands= []) => {
        let filter = '';
        let brandArr = brands.length > 0 ? brands.forEach(brand => filter += '&brand=' + brand) : '';
        try {
            let response = await instance.get(`products?_page=${page}&_limit=${limit}${filter}`);
            return response
        } catch (e) {
            return 'Server don\'t connection! \n' + e;
        }
    }
}