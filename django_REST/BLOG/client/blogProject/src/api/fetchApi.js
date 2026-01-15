import commonApi from "./commonApi";

export const register=(data)=>{
    return commonApi("http://127.0.0.1:8000/user/","POST",data)
}

export const login=(data)=>{
    return commonApi("http://127.0.0.1:8000/token","POST",data,"")
}

export const listAllBlogs=(header)=>{
    return commonApi("http://127.0.0.1:8000/post/","GET","",header)
}

export const BlogDetails=(id,header)=>{
    return commonApi(`http://127.0.0.1:8000/post/${id}/`,"GET","",header)
}

export const Addlikes=(id,header)=>{
    return commonApi(`http://127.0.0.1:8000/post/${id}/add_likes/`,"GET","",header)
}

export const listComments=(id,header)=>{
    return commonApi(`http://127.0.0.1:8000/post/${id}/comments_list/`,"GET","",header)
}