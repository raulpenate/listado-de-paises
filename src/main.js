import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './css/index.sass'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

import Vue3EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'

const app = createApp(App)

app.component('EasyDataTable', Vue3EasyDataTable)
app.use(Antd)

app.use(store)
app.use(router)

app.mount('#app')
