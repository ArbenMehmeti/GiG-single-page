import http, { API } from './httpService';
http.setJwt();

export function get() {
    return http.get(`${API}/company-values`);
}

export default {
    get
}