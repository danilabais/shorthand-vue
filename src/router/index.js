import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    meta: {
      title: 'Главная'
    }
  },
  {
    path: '/train',
    name: 'Train',
    component: () => import('../views/Train.vue'),
    meta: {
      title: 'Тренировка'
    }
  },
  {
    path: '/exam',
    name: 'Exam',
    component: () => import('../views/Exam.vue'),
    meta: {
      title: 'Экзамен'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    beforeEnter: AuthGuard,
    meta: {
      title: 'Регистрация'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    beforeEnter: AuthGuard,
    meta: {
      title: 'Авторизация'
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue'),
    beforeEnter: AuthGuard,
    meta: {
      title: 'Настройки'
    }
  },
  {
    path: '/results',
    name: 'Results',
    component: () => import('../views/Results.vue'),
    beforeEnter: AuthGuard,
    meta: {
      title: 'Результаты'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass:'active'
})

const AuthGuard =(from,to,next) =>!Store.getters.isUserAuthenticated?next():next('/')

router.beforeEach((to,from,next)=>{
  document.title = `${to.meta.title} | Скоропись`;
  next()
})


export default router
