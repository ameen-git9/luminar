import commonApi from "./commonApi";


export const listServices=()=>{
    return commonApi("http://127.0.0.1:8000/service/","GET","")
}