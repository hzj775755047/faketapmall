import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'


import Home from "../views/home/Home";
import Category from "../views/category/Category";
import CategoryShow from "../views/category/CategoryShow";
import Ranking from "../views/ranking/Ranking";
import Details from "../views/detail/Details";
import Login from "../views/login/Login";
import Register from "../views/register/Register";
import Main from "../views/main/Main";
import Search from "../views/search/Search";
import Profile from "../views/profile/Profile";
import web3 from "../views/home/web3";
Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/main'},
  {path: '/login', component: Login},
  {path: '/web3', component: web3},
  {path: '/register', component: Register},
  {path: '/profile', component: Profile},
  {
    path: '/main',
    component: Main,
    redirect: '/main/home',
    children: [
      {path: 'home', component: Home},
      {path: 'category', component: CategoryShow},
      {path: 'category/:classId', component: Category},
      {path: 'ranking', component: Ranking},
      {path: 'details/:appId', component: Details},
      {path: 'login', component: Login},
      {path: 'search/:searchStr', component: Search}
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition;
    }else{
      return {x: 0, y: 0};
    }
  }
});

// 导航守卫
router.beforeEach((to, from, next) =>{
  let path = to.path;
  if(path.includes('/home')){
    store.commit({
      type: 'setTopHeader',
      topHeader: ''
    });
    next();
  }else if(path.includes('/category')){
    store.commit({
      type: 'setTopHeader',
      topHeader: ''
    });
    next();
  }else if(path.includes('ranking')){
    store.commit({
      type: 'setTopHeader',
      topHeader: ''
    });
    next();
  }else if(path.includes('details')){
    store.commit({
      type: 'setTopHeader',
      topHeader: ''
    });
    next();
  }else if(path.includes('login')){
    store.commit({
      type: 'setTopHeader',
      topHeader: '登录'
    });
    next();
  }else if(path.includes('register')){
    store.commit({
      type: 'setTopHeader',
      topHeader: '注册'
    });
    next();
  }else if(path.includes('search')){
    store.commit({
      type: 'setTopHeader',
      topHeader: '应用搜索'
    });
    next();
  }
  next();
});


export default router
