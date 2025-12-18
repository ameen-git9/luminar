import axios from 'axios'

const commonApi=(reqUrl,reqMethod,reqData)=>{
    const config={
        url:reqUrl,
        method:reqMethod,
        data:reqData,
        headers:{"Content-Type": "application/json"}

    }
    return axios(config)
}
export default commonApi