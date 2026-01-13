import axios from 'axios'


const commonApi=(Url,Method,Data,header)=>{
    const config={
        url:Url,
        method:Method,
        data:Data,
        headers: header ? header : { "Content-Type": "application/json" }
    }
    return axios(config)
    
}
export default commonApi