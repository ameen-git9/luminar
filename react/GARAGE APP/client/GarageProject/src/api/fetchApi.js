import { data } from "react-router-dom";
import commonApi from "./commonApi";


export const getallServices = () => {
    return commonApi("http://127.0.0.1:8000/service/", "GET", "","")
}

export const getServices=(id)=>{
    return commonApi(`http://127.0.0.1:8000/customer/${id}/list_service/`,"GET","","")
}

export const getAllCustomer=()=>{
    return commonApi("http://127.0.0.1:8000/customer/", "GET", "","")
}

export const getCustomer=(id,data)=>{
    return commonApi(`http://127.0.0.1:8000/customer/${id}/`,"GET","","")
}

export const addService=(id,data)=>{
    return commonApi(`http://127.0.0.1:8000/customer/${id}/add_service/`,"POST",data,"")
}

export const addCustomer=(data,header)=>{
    return commonApi("http://127.0.0.1:8000/customer/","POST",data,header)
}

export const deleteCustomer=(id)=>{
    return commonApi(`http://127.0.0.1:8000/customer/${id}/`, "DELETE", "","")
}

export const deleteService=(id)=>{
    return commonApi(`http://127.0.0.1:8000/service/${id}/`, "DELETE", "","")
}

export const getService=(id)=>{
    return commonApi(`http://127.0.0.1:8000/service/${id}/`,"GET","","")
}

export const updateService=(id,data)=>{
    return commonApi(`http://127.0.0.1:8000/service/${id}/`,"PUT",data,"")
}