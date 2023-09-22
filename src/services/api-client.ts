import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9bd5c5ba08f047738646da208215646c'
    }
})