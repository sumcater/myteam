import Axios from 'axios'
import qs from 'qs'
import modules from './modules'

console.log(modules);

class GetData {
    constructor() {}

    sendAjax(options, params) {
        this.initInterceptor()
        Axios.interceptors.request.use(options.req || new Function());
        Axios.interceptors.response.use(options.res || new Function());
        if (options.method === 'post') {
            // options.data = options.data || params
            options.data = options.data || qs.stringify(params, { indices: false })
        } else {
            options.params = params
        }

        return Axios(options)
    }

    fetch(params) {  //基础方法
        this.initInterceptor()
        return Axios(params)
    }

    initInterceptor() {
        Axios.interceptors.request.handlers = []
        Axios.interceptors.response.handlers = []
    }
}

const injectFunction = function(constructor) {
    modules.forEach((value) => {
        for (let i in value) {
            constructor.prototype[i] = value[i]
        }
    })
}

injectFunction(GetData)

const api = function (Vue, options) {
    Vue.prototype.$getData = new GetData()
}

const getData = new GetData()

export {
    api, getData
}
