import commonApi from "./commonApi";

export const listStudents=()=>{
    return commonApi("http://127.0.0.1:8000/student/","GET","")
}

export const deleteStudent=(id)=>{
    return commonApi(`http://127.0.0.1:8000/student/${id}/`,"DELETE","")
}

export const addStudent=(data)=>{
    return commonApi("http://127.0.0.1:8000/student/","POST",data)
}
