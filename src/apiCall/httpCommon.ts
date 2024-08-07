import axios from 'axios';
import config from '../apiConfig';

const instance = axios.create({
    baseURL: `${config.API_BASE_URL}/api`,
    timeout: 60000,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
});

export default instance;
