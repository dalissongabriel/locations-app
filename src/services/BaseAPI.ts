import axios from "axios";

export const baseURL = "http://localhost:3001/api";

export const api = axios.create({ baseURL });
