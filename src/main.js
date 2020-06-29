import './public-path'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routes from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)

let instance = null
let router = null

function render(props = {}) {
  const { container } = props
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/vuetwo' : '/',
    mode: 'history',
    routes
  })

  // 挂载应用
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if(!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('vue app two bootstraped')
}

export async function mount(props) {
  console.log('vue app two mount')
  // 设置通信
  Vue.prototype.$onGlobalStateChange = props.onGlobalStateChange
  Vue.prototype.$setGlobalState = props.setGlobalState
  render(props)
}

export async function unmount() {
  console.log('vue app two unmount')
  instance.$destroy()
  instance = null
  router = null
}
