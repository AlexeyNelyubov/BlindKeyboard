import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '../views/IndexPage.vue'
const TestPage  = () => import("/src/views/TestPage.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexPage
    },
    {
      path: "/test",
      name: "Test",
      component: TestPage,
    },
  ]
})

export default router
