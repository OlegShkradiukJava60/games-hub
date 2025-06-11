import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "73c25213049c4bc1a9583a620d01d2a0"
  }
});

export default apiClient;