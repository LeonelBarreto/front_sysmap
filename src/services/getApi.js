import axios from "axios";

const baseApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    timeout: 10000,
    headers: {
        'Content-Type': "application/json"
    }
});

export default baseApi;