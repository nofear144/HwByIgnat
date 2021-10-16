import axios from "axios";

export type ResponseType = {
    errorText: string
    info: string
    yourBody: {
        success: boolean
    }
    yourQuery: {}
}
export const requstsApi = {
    postRequests(success: boolean) {
        return axios.post<ResponseType>("https://neko-cafe-back.herokuapp.com/auth/test", {success})
    }
}


