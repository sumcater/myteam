import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import form from '@/view/form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect:"/form"
    },
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
  ]
})
