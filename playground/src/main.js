import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import TejasLib from 'tejas-lib'
import 'tejas-lib/dist/tejas-lib.css'

Vue.config.productionTip = false
Vue.prototype.$vuetify = { rtl: false }
Vue.use(TejasLib)

new Vue({
    vuetify,
    render: (h) => h(App),
}).$mount('#app')
