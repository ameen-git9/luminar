import commonApi from "./commonApi";


export const getallServices = () => {
    return commonApi("http://127.0.0.1:8000/service/", "GET", "")
}