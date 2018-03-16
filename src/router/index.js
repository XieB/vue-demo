import Vue from 'vue'
import Router from 'vue-router'

import Test from '@/components/Test'
import Index from '@/components/index/Index'
import Login from '@/components/index/Login'
import Edit from '@/components/index/Edit'
import Add from '@/components/index/Add'
import Nav from '@/components/index/Nav'
import Demand from '@/components/index/Demand'
import AddDemand from '@/components/index/AddDemand'
import editDemand from '@/components/index/editDemand'
import List from '@/components/index/List'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/', redirect: '/index/index'
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
            meta: {
                title: '计划列表',
                requireAuth : true
            },
            children: [
                {
                    path: 'index',
                    component: List,
                    meta: {
                        title: '计划列表',
                        requireAuth : true
                    }
                },
                {
                    path: 'add',
                    component: Add,
                    meta: {
                        title: '添加计划',
                        requireAuth : true
                    }
                },
                {
                    path: 'demand',
                    component: Demand,
                    meta: {
                        title: '需求列表',
                        requireAuth : true
                    }
                },
                {
                    path: 'planedit/:id',
                    component: Edit,
                    meta: {
                        title: '编辑需求',
                        requireAuth : true
                    }
                },
                {
                    path: 'addDemand',
                    component: AddDemand,
                    meta: {
                        title: '添加需求',
                        requireAuth : true
                    }
                },
                {
                    path: 'editDemand/:id',
                    name: 'editDemand',
                    component: editDemand,
                    meta: {
                        title: '编辑需求',
                        requireAuth : true
                    }
                },
            ]
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
            path: '/test',
            name: 'test',
            component: Test,
            meta: {
                title: '测试'
            }
        },
    ]
})
