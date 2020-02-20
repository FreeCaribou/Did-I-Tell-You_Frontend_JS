import axios from 'axios';

class BaseService {

    baseUrl = process.env.REACT_APP_API_URL;

    async getBase() {
        return axios.get(process.env.REACT_APP_API_URL + '');
    }

}

export default BaseService;