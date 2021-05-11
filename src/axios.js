import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/e-commerce-app-73c4b/us-central1/api", // The API URL (cloud Function)
});

export default instance;
