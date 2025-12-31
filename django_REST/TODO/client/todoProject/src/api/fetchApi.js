import commonApi from "./commonApi";

console.log("FETCH API FILE LOADED");

export const register=(data)=>{
    return commonApi("http://127.0.0.1:8000/user/","POST",data)
}

export const login=(data)=>{
    return commonApi("http://127.0.0.1:8000/login","POST",data,"")
}


export const listTodo = (header) => {
    return commonApi("http://127.0.0.1:8000/todo/","GET","",header)
}


export const addTodo=(data,header)=>{
    return commonApi("http://127.0.0.1:8000/todo/","POST",data,header)
}

export const deleteTodo=(id,header)=>{
    return commonApi(`http://127.0.0.1:8000/todo/${id}/`,"DELETE","",header)
}

export const getTodo=(id,header)=>{
    return commonApi(`http://127.0.0.1:8000/todo/${id}/`,"GET","",header)
}

export const editTodo=(id,data,header)=>{
    return commonApi(`http://127.0.0.1:8000/todo/${id}/`,"PUT",data,header)
}