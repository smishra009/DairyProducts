import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL="http://localhost:5154/AviralDhara/"
const responsefun= (response: AxiosResponse)=>response.data
const delay= ()=>new Promise((resolve)=>setTimeout(resolve,500))
axios.interceptors.response.use(async (response)=>{
    await delay()
    return response
},(error)=>{
    console.log("caught by interceptor");
    return Promise.reject(error.response)
})
const requests={
    get: (url:string)=>axios.get(url).then(responsefun),
    post: (url:string,obj:{})=>axios.post(url,obj).then(responsefun),
    put: (url:string,obj:{})=>axios.put(url,obj).then(responsefun),
    delete: (url:string)=>axios.delete(url).then(responsefun),
}
const catalog= {
    list: ()=>requests.get("Product"),
    IndiProduct: (id:number)=>requests.get(`Product/${id}`)
}
const agent={
    catalog
}
export default agent