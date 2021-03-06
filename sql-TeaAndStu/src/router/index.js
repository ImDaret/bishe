import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Header from '../views/header.vue'
import CourseList from '../views/courseList.vue'
import SelfInfo from '../views/selfInfo.vue'
import CourseDetail from '../views/courseDetail.vue'
import ExperimentDetail from '../views/experimentDetail.vue'
import ExperimentBase from '../views/experimentBase.vue'
import Learning from '../views/learning.vue'
import Count from '../views/count.vue'
import Sheader from '../views/student/header.vue'
import ScourseList from '../views/student/courseList.vue'
import Sexperiment from '../views/student/experiment.vue'
import SexperimentDetail from '../views/student/experimentDetail.vue'
import SlookExp from '../views/student/lookExp.vue'
import SselfInfo from '../views/student/selfInfo.vue'
import Slearning from '../views/student/learning.vue'
import Sdiscuss from '../views/student/discuss.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/header',
    component: Header,
    redirect: '/header/courseList',
    children: [
      {
        path: '/header/courseList',
        component: CourseList
      },
      {
        path: '/header/experimentDetail',
        component: ExperimentDetail
      },
      {
        path: '/header/courseDetail',
        component: CourseDetail
      },
      {
        path: '/header/selfInfo',
        component: SelfInfo
      },
      {
        path: '/header/experimentList',
        component: ExperimentBase
      },
      {
        path: '/header/learning',
        component: Learning
      },
      {
        path: '/count',
        component: Count
      }
    ]
  },
  {
    path: '/Sheader',
    component: Sheader,
    children: [
      {
        path: '/ScourseList',
        component: ScourseList
      },
      {
        path: '/Sexperiment',
        component: Sexperiment
      },
      {
        path: '/SexperimentDetail',
        component: SexperimentDetail
      },
      {
        path: '/SlookExp',
        component: SlookExp
      },
      {
        path: '/SselfInfo',
        component: SselfInfo
      },
      {
        path: '/Slearning',
        component: Slearning
      },
      {
        path: '/Sdiscuss',
        component: Sdiscuss
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.path !== '/' && !token) {
    console.log('触发了全局导航守卫')
    next('/')
  } else {
    next()
  }
})

export default router
