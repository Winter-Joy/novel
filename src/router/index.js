import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
Vue.use(Router)

Vue.component('mycomponent',{
  props: ['name'],
  template: `<div>这是一个自定义组件{{name}}</div>`,
  data () {
    return {
      message: 'hello world'
    }
  }
})

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
	    path:'/world',
	    name:'HelloWorld',
	    component:HelloWorld
    }
  ]
})
