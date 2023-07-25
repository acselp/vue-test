import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'
import RepositoryListView from "@/views/Repository/RepositoryListView.vue";
import RepositoryDetailView from "@/views/Repository/RepositoryDeatilView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/repos/:username',
      component: RepositoryListView
    },
    {
      path: '/repos/:username/:repoName',
      component: RepositoryDetailView
    }
  ]
})

export default router
