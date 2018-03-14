import Vue from 'vue'
import Router from 'vue-router'
import Post from '@/components/Post'
import Login from '@/components/Login'
import ManagerIndex from '@/components/ManagerIndex'
import Edit from '@/components/Edit'
import Add from '@/components/Add'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '/',
            component: Post,
            meta: {
                title: '计划列表'
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                title: '登陆'
            }
        },
        {
            path: '/managerindex',
            name: 'managerindex',
            component: ManagerIndex,
            meta: {
                title: '后台管理',
                requireAuth : true
            }
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: Edit,
            meta: {
                title: '编辑',
                requireAuth : true
            }
        },
        {
            path: '/add',
            name: 'add',
            component: Add,
            meta: {
                title: '添加',
                requireAuth : true
            }
        }
    ]
})
