import commonApi from "./commonApi";

export const listEmployee=()=>{
    return commonApi("http://127.0.0.1:8000/Employee/","GET","")
}

export const addEmployee=(data)=>{
    return commonApi("http://127.0.0.1:8000/Employee/","POST",data)
}

export const getEmployee=(id)=>{
    return commonApi(`http://127.0.0.1:8000/Employee/${id}/`,"GET","")
}

export const updateEmployee=(id,data)=>{
    return commonApi(`http://127.0.0.1:8000/Employee/${id}/`,"PUT",data)
}

export const deleteEmployee=(id)=>{
    return commonApi(`http://127.0.0.1:8000/Employee/${id}/`,"DELETE","")
}