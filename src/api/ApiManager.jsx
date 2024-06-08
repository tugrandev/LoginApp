import axios from "axios";

const ApiManager = axios.create({
    baseURL : "https://tugrann.com/api/",
    responseType : 'json',
    withCredentials : true
})

export default ApiManager;