import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'
import RepositoryListView from "@/views/Repository/RepositoryListView.vue";
import RepositoryDeatilView from "@/views/Repository/RepositoryDeatilView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/repos',
      name: 'repos',
      component: RepositoryListView
    },
    {
      path: '/repos/:username/:repoName',
      name: 'reposDetail',
      component: RepositoryDeatilView
    }
  ]
})

export default router
