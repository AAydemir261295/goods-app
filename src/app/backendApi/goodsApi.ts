import axios from 'axios';

const apiUrl = (page: number, size: number) => `http://o-complex.com:1337/products?page=${page}&page_size=${size}`;


export async function retrieveGoods(page: number, size: number) {

    try {
        var response = await axios.get(apiUrl(page, size));
        return response.data;
    } catch (err) {
        console.log(err);
    }
}