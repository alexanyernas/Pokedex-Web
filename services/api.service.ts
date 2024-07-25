// Import Axios
import axios, { AxiosRequestConfig } from 'axios';

const connections = {
    'production':   'https://pokeapi.co/api/v2'
}

const connection = connections['production'];

const ApiService = {
    _requestInterceptor: 0,
    _401interceptor: 0,

    init(baseURL = connection) {
        axios.defaults.baseURL = baseURL;
    },

    setHeader() {
        axios.defaults.headers.common[
            'Accept'
            ] = `application/json`;
    },

    getHeader() {
        return axios.defaults.headers.common;
    },

    removeHeader() {
        axios.defaults.headers.common = {};
    },

    get<T>(resource: string) {
        return axios.get<T>(resource);
    },

    getCustom<T>(resource: string,  config: AxiosRequestConfig) {
        return axios.get<T>(resource, config);
    },

    post<T= any, S = any>(resource: string, data: S) {
        return axios.post<T>(resource, data);
    },

    postCustom<T= any, S = any>(resource: string, data: S, config: AxiosRequestConfig) {
        return axios.post<T>(resource, data, config);
    },

    put<T, S>(resource: string, data: S) {
        return axios.put<T>(resource, data);
    },

    delete<T>(resource: string) {
        return axios.delete<T>(resource);
    },

    customRequest(data: AxiosRequestConfig) {
        return axios(data);
    },
}

ApiService.init();
ApiService.setHeader();

export default ApiService;