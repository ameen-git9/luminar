import axios from "axios";

const commonApi = (URL, METHOD, DATA) => {
    const config = {
        url: URL,
        method: METHOD,
        data: DATA,
        header: { "Content-Type": "application/json" }
    }
    return axios(config)
}
export default commonApi