import axios from "axios";

export const baseURL = "http://localhost:3001/api";

export const httpClient = axios.create({ baseURL });
