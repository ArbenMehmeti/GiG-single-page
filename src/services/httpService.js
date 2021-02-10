import axios from 'axios';

export const API = "http://207.154.254.31/api";

const jwt = `jeUPuSOlFE4Kc0SwXxlmVQBhvI7qwa29HA44Q2yWYbv6Z5kqq8ZoQDaB1CtbcHPR4jCwv`;

function setJwt() {
    axios.defaults.headers.common["token"] = `${jwt}`;
}

export default {
    get: axios.get,
    setJwt
}