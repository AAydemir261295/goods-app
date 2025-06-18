import axios from 'axios';
import { OrderBody } from './models/OrderBody';

const apiUrl = `http://o-complex.com:1337/order`;


export async function sendBuyRequest(body: OrderBody) {

    try {
        var response = await axios.post(apiUrl, body);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}