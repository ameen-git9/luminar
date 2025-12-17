import commonApi from "./commonApi";

export const listEmployee=()=>{
    return commonApi("http://127.0.0.1:8000/Employee/","GET","")
}