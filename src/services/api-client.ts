import axios from "axios";
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '06308cfd74c447b4b6cfed15abe3de7a'
    }
})