import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('../views/home/Home')
const Ranking = ()=> import('../views/ranking/Ranking')
const Category = ()=> import('../views/category/Category')
const ChuXingDaoHang = ()=> import('../views/category/categoryChildren/ChuXingDaoHang')
const ErTong = ()=> import('../views/category/categoryChildren/ErTong')
const GouWuBiJia = ()=> import('../views/category/categoryChildren/GouWuBiJia')
const JinRongLiCai = ()=> import('../views/category/categoryChildren/JinRongLiCai')
const LvXingZhuSu = ()=> import('../views/category/categoryChildren/LvXingZhuSu')
const MeiShi = ()=> import('../views/category/categoryChildren/MeiShi')
const PaiSheMeiHua = ()=> import('../views/category/categoryChildren/PaiSheMeiHua')
const ShangWu = ()=> import('../views/category/categoryChildren/ShangWu')
const SheJiaoTongXun = ()=> import('../views/category/categoryChildren/SheJiaoTongXun')
const ShiYongGongJu = ()=> import('../views/category/categoryChildren/ShiYongGongJu')
const XiaoChengXu = ()=> import('../views/category/categoryChildren/XiaoChengXu')
const XinWenYueDu = ()=> import('../views/category/categoryChildren/XinWenYueDu')
const YingYingYuLe = ()=> import('../views/category/categoryChildren/YingYingYule')
const YunDongJianKang = ()=> import('../views/category/categoryChildren/YunDongJianKang')

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
    path: '/category',
    component: Category,
    children: [
      {
        path: '',
        component: ChuXingDaoHang
      },
      {
        path: 'ertong',
        component: ErTong
      },
      {
        path: 'gouwubijia',
        component: GouWuBiJia
      },
      {
        path: 'jinronglicai',
        component: JinRongLiCai
      },
      {
        path: 'lvxingzhusu',
        component: LvXingZhuSu
      },
      {
        path: 'meishi',
        component: MeiShi
      },
      {
        path: 'paishemeihua',
        component: PaiSheMeiHua
      },
      {
        path: 'shangwu',
        component: ShangWu
      },
      {
        path: 'shejiaotongxun',
        component: SheJiaoTongXun
      },
      {
        path: 'shiyonggongju',
        component: ShiYongGongJu
      },
      {
        path: 'xiaochengxu',
        component: XiaoChengXu
      },
      {
        path: 'xinwenyuedu',
        component: XinWenYueDu
      },
      {
        path: 'yingyingyule',
        component: YingYingYuLe
      },
      {
        path: 'yundongjiankang',
        component: YunDongJianKang
      }
    ]
  },
  {
    path: '/ranking',
    component: Ranking,
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 3.导出router
export default router
