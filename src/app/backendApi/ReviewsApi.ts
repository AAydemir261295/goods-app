import axios from 'axios';

const apiUrl = `http://o-complex.com:1337/reviews`;


export async function retrieveReviews() {

  try {
    var response = await axios.get(apiUrl);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}