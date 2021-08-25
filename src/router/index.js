import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('../views/home/Home')
const Ranking = ()=> import('../views/ranking/Ranking')
const Category = ()=> import('../views/category/Category')
const Class = () => import('../views/category/categoryChildren/Class')
const Login = () => import('../views/login/Login')
const Register = () => import('../views/register/Register')
const Upload = () => import('../views/upload/Upload')
// 1.安装插件
Vue.use(VueRouter)

// 2.创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: "/category",
    redirect: 'category/c1/1'
  },
  {
    path: '/category',
    component: Category,
    children: [
      {
        path: 'c1/:id',
        component: Class
      },
      {
        path: 'c2/:id',
        component: Class
      },
      {
        path: 'c3/:id',
        component: Class
      },
      {
        path: 'c4/:id',
        component: Class
      },
      {
        path: 'c5/:id',
        component: Class
      },
      {
        path: 'c6/:id',
        component: Class
      },
      {
        path: 'c7/:id',
        component: Class
      },
      {
        path: 'c8/:id',
        component: Class
      },
      {
        path: 'c9/:id',
        component: Class
      },
      {
        path: 'c10/:id',
        component: Class
      },
      {
        path: 'c11/:id',
        component: Class
      },
      {
        path: 'c12/:id',
        component: Class
      },
      {
        path: 'c13/:id',
        component: Class
      },
      {
        path: 'c14/:id',
        component: Class
      }
    ]
  },
  {
    path: '/ranking',
    component: Ranking,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/upload',
    component: Upload
  }
]
const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  mode: 'history'
})

// 3.导出router
export default router
