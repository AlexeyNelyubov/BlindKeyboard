import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
const TestView  = () => import("/src/views/TestView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexView
    },
    {
      path: "/test",
      name: "Test",
      component: TestView,
    },
  ]
})

export default router