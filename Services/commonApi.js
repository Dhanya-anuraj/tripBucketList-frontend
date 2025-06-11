import axios from "axios";



export const commonApi = async (httpMethod, url, reqBody) => {
    //axios config

    const reqConfig = {
        method: httpMethod,
        url,
        data: reqBody,
        headers: { 'Content-Type': 'application/json' }

    }
    //attach entire configuration into axios
    return await axios(reqConfig).then((res) => {
    return res
}).catch((err) => {
    return err
})
}


