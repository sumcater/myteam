import mainConfig from '../config/main'

export default {
    // 登录
    login(params) {
        let config = {
            url: '/login',
            method: 'post'
        }
        return this.sendAjax(Object.assign({}, mainConfig, config), params)
    },
    //注册账号
    register(params) {
        let config = {
            url: '/register',
            method: 'post'
        }
        return this.sendAjax(Object.assign({}, mainConfig, config), params)
    },  
    //判断登录
    isLogin(params) {
        let config = {
            url: '/isLogin',
            method: 'post'
        }
        return this.sendAjax(Object.assign({}, mainConfig, config), params)
    },
    //退出登录
    logout(params) {
        let config = {
            url: '/logout',
            method: 'post'
        }
        return this.sendAjax(Object.assign({}, mainConfig, config), params)
    },
}