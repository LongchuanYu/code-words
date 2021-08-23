import { createRouter, createWebHistory,} from 'vue-router'
import home from '@/views/home.vue'
import test from '@/views/test.vue'
import user from '@/views/user.vue'
import word from '@/views/word.vue'
import look from '@/views/look.vue'
import detail from '@/views/detail.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path:'/home',
    component:home,
  },
  {
    path:'/test',
    component: test,
  },
  {
    path:'/user',
    component: user,
  },
  {
    path:'/word',
    component: word
  },
  {
    path:'/look',
    component: look
  },
  {
    path:'/detail',
    component: detail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
