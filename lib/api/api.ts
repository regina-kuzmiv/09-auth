import axios, { AxiosError } from "axios";

export type ApiError = AxiosError<{ error: string }>;

const nextServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
  withCredentials: true,
});

export default nextServer;

// localhost в .env треба буде змінити на діючий коли закину на vercel
