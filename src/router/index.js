import Vue from 'vue'
import Router from 'vue-router'
import Palindrom from '@/components/palindrom'
import fibonacci from '@/components/fibonacci'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/palindrom',
            name: 'Palindrom',
            component: Palindrom
        },
        {
            path: '/fibonacci',
            name: 'Fibonacci',
            component: fibonacci
        }
    ]
})