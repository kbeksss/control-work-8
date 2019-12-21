import axios from 'axios';

const axiosQuote = axios.create({
    baseURL: 'https://my-blog-9bc8c.firebaseio.com/'
});

export default axiosQuote;