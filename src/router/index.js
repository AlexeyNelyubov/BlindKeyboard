import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '../pages/IndexPage.vue'
const TestPage  = () => import("/src/pages/TestPage.vue");
const ResultPage  = () => import("/src/pages/ResultPage.vue");

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
      name: "test",
      component: TestPage,
    },
    {
      path: "/result",
      name: "result",
      component: ResultPage,
    },
  ]
})

export default router
