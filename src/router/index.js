import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NavList from '../components/NavList'
import TestCase from '../components/TestCase'
import TestReport from '../components/TestReport'
import Login from '../components/Login'
import DashBoard from '../components/DashBoard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    component: DashBoard,
    children: [
      {
        path: 'testcase',
        name: 'TestCase',
        component: TestCase
      },
      {
        path: 'report',
        name: 'Report',
        component: TestReport
      },
    ]

  },
  {
    path: '/list',
    name: 'List',
    component: NavList
  },
  {
    path: '/testcase',
    name: 'TestCase',
    component: TestCase
  },
  {
    path: '/report',
    name: 'Report',
    component: TestReport
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
