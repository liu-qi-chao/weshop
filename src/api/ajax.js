import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
    baseURL: '/api'
})

//请求拦截器
instance.interceptors.request.use(config => {
    config.data = qs.stringify(config.data)
    return config
})

//添加响应拦截器
instance.interceptors.response.use(
    response => response.data,
    error => {
        alert('请求失败')
        console.log(error);
        return new Promise(() => {})
    }
)
export default instance