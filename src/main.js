// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { MdDialog, MdDatepicker, MdIcon, MdRadio, MdSwitch, MdSubheader, MdCheckbox, MdList, MdCard, MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdDialog)
Vue.use(MdDatepicker)
Vue.use(MdIcon)
Vue.use(MdRadio)
Vue.use(MdSwitch)
Vue.use(MdSubheader)
Vue.use(MdCheckbox)
Vue.use(MdList)
Vue.use(MdCard)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
