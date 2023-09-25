import axios from 'axios';

const instance = axios.create({
baseURL: process.env.REACT_APP_POST_REGISTER_DATA_API
});

export default instance;