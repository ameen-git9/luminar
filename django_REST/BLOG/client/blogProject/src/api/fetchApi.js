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
    return commonApi(`http://127.0.0.1:8000/post/${id}/Add_likes/`,"POST","",header)
}

export const listComments=(id,header)=>{
    return commonApi(`http://127.0.0.1:8000/post/${id}/comments_list/`,"GET","",header)
}

export const addBlog=(data,header)=>{
    return commonApi("http://127.0.0.1:8000/post/","POST",data,header)

}

export const listUserBlog=(header)=>{
    return commonApi("http://127.0.0.1:8000/user/post_list/","GET","",header)

}

export const addComments=(id,data,header)=>{
    return commonApi(`http://127.0.0.1:8000/post/${id}/add_comment/`,"POST",data,header)

}

export const createUserProfile=(data,header)=>{
    return commonApi("http://127.0.0.1:8000/profile/","POST",data,header)

}

export const blogDetails=(id,header)=>{
    return commonApi(`http://127.0.0.1:8000/post/${id}/`,"GET","",header)
}

export const listAllProfile=(header)=>{
    return commonApi("http://127.0.0.1:8000/profile/","GET","",header)
}

export const addFollower=(id,header)=>{
    return commonApi(`http://127.0.0.1:8000/profile/${id}/add_follower/`,"POST","",header)
}

export const listFoloowers=(id,header)=>{
    return commonApi(`http://127.0.0.1:8000/profile/${id}/list_follower/`,"POST","",header)
}

export const profileDetails=(id,header)=>{
    return commonApi(`http://127.0.0.1:8000/profile/${id}/`,"GET","",header)
}

export const getUserData=(header)=>{
    return commonApi("http://127.0.0.1:8000/get/user","GET","",header)
}

export const profileUnfollow=(id,header)=>{
        return commonApi(`http://127.0.0.1:8000/profile/${id}/unfollow/`,"DELETE","",header)
}

export const getUserProfile=(id)=>{
        return commonApi(`http://127.0.0.1:8000/user/${id}/get_userprofile/`,"GET","","")
}

export const getWriterBlog = (id, header) => {
    return commonApi(`http://127.0.0.1:8000/post/${id}/`,"GET","",header)
}

