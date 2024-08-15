import axiosClient from "../Axios.js";
import {ErrorResponse} from "./ErrorResponse.js";

export const RegisterApi = async (body) => {
    try {
        const {data,status} = await axiosClient.post('/register',body);
        return {data, status};
    }catch(error) {
        return ErrorResponse(error);
    }
}