import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import form from '@/view/form'
import watch from '@/view/watch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect:"/watch"
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
    {
      path: '/watch',
      name: 'watch',
      component: watch
    },
  ]
})
