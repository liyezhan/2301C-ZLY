import axios from "axios";

class HttpRequset {
    instance: any
    constructor(baseConfig: any) {
        this.instance = axios.create(baseConfig)

        this.instance.interceptors.request.use((config: any) => {
            let token = localStorage.getItem('token')
            if(token){
                config.headers.Authorization = token
            }
            config.headers.ContentType = 'application/x-www-form-urlencoded'
            return config
        }, (err: any) => {
            return Promise.reject(err)
        })

        this.instance.interceptors.response.use((res: any) => {
            return res.data
        }, (err: any) => {
            return Promise.reject(err)
        })
    }
    get(url: any, params = {}) {
        return this.instance.get(url, { params })
    }
    post(url: any, params = {}) {
        return this.instance.post(url, params)
    }
    put(url: any, params = {}) {
        return this.instance.put(url, params)
    }
    delete(url: any, params = {}) {
        return this.instance.delete(url, params)
    }
}

export default new HttpRequset({
    baseURL:"https://api.it120.cc/xiaochengxu",
    timeout:3000
})