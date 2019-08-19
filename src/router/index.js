import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import form from '@/view/form'
import watch from '@/view/watch'
import menu from '@/view/menu'
import dynamicQueryAddConfig from '@/view/dynamicQuery/dynamicQueryAddConfig'
import dynamicQueryVerifyConfig from '@/view/dynamicQuery/dynamicQueryVerifyConfig'
import welcome from '@/view/welcome'
import home from '@/view/home'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: "/",
    //   redirect:"/home"
    // },
    {
      path: "HelloWorld",
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/form',
      name: 'form',
      component: form
    },
    {
      path: '/watch',
      name: 'watch',
      component: watch
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    },
    
    {
      path: '/',
      name: 'home',
      component: home,
      redirect:"/welcome",
      children: [
        {
          path: 'welcome',
          name: 'welcome',
          component: welcome
        },
        
        {
          path: 'dynamicQuery',
          name: 'dynamicQuery',
          // redirect:"/dynamicQueryAddConfig",
          children: [
            {
              path: 'dynamicQueryAddConfig',
              name: 'dynamicQueryAddConfig',
              component: dynamicQueryAddConfig
            },
            {
              path: 'dynamicQueryVerifyConfig',
              name: 'dynamicQueryVerifyConfig',
              component: dynamicQueryVerifyConfig
            },
          ]
        },
        
      ]
    },
  ]
})
