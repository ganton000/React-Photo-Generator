import axios from 'axios';

const apiKey = process.env.REACT_APP_ACCESS_KEY;
const baseUrl = process.env.REACT_APP_BASE_URL;

export default axios.create({

    baseURL: `${baseUrl}`,
    headers: {
        Authorization: `Client-ID ${apiKey}`
    }
});