import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
Vue.use(Router)

// Vue.component('mycomponent',{
//   template: `<div>这是一个自定义组件</div>`,
//   data () {
//     return {
//       message: 'hello world'
//     }
//   }
// })

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
	    path:'/hello',
	    name:'HelloWorld',
	    component:HelloWorld
    }
  ]
})
