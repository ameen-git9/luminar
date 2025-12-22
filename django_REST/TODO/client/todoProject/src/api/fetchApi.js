import axios from 'axios'


const commonApi=(Url,Method,Data)=>{
    const config={
        url:Url,
        method:Method,
        data:Data,
        headers:{'content-type':'application/json'}
    }
    return axios(config)
    
}
export default commonApi