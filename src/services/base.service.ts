import axios from "axios";

export default class BaseService {
    baseUrl: any;
    authorizationToken: string;
    headers: any;

    constructor() {
        this.baseUrl = process.env.REACT_APP_API_URL;
        if (process.env.REACT_APP_MOCK) {
            this.authorizationToken =
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTgwNDEwMDI5fQ.eLARrEQDu38k2zyrq4X_SouV7uzLzUgP50mxx0hub1I";
        } else {
            // TODO see later the login
            this.authorizationToken =
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTgwNDEwMDI5fQ.eLARrEQDu38k2zyrq4X_SouV7uzLzUgP50mxx0hub1I";
        }

        this.headers = { authorization: this.authorizationToken };
    }

    async get(url: string) {
        return axios.get(this.baseUrl + url, { headers: this.headers });
    }

    async post(url: string, body: any) {
        return axios.post(this.baseUrl + url, body, { headers: this.headers });
    }

    async put(url: string, body: any) {
        return axios.put(this.baseUrl + url, body, { headers: this.headers });
    }

    async delete(url: string) {
        return axios.delete(this.baseUrl + url, { headers: this.headers });
    }

    async getHelloWorld() {
        return this.get("");
    }
}
