import axios from 'axios'

const commonApi=(reqUrl,reqMethod,reqData)=>{
    const config={
        url:reqUrl,
        method:reqMethod,
        data:reqData,
        headers:{'Content-type':'application/js'}

    }
    return axios(config)
}
export default commonApi