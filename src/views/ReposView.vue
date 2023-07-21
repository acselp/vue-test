<script setup lang="ts">

import Repository from "@/components/Repository.vue";
import {useRepositoryStore} from "@/stores/repository";
import ReposSkeleton from "@/components/ReposSkeleton.vue";
import {useUserStore} from "@/stores/user";

const repositoryStore = useRepositoryStore();
const userStore = useUserStore();

repositoryStore.$setRepos(userStore.$state.user.login);

</script>

<template>
  <div class="home-main-container">
    <div class="repositories-container">
      <div class="repos">
        <router-link class="is-info button" to="/"> <i class="fa-solid fa-arrow-left">&nbsp;</i> Back to home </router-link>
        <Repository v-if="repositoryStore.$state.isReposSet" v-for="repo in repositoryStore.$state.repos" :link="repo.html_url" :name="repo.name" :stars="repo.stargazers_count" />

        <ReposSkeleton v-if="repositoryStore.$state.isLoading && !repositoryStore.$state.isReposSet" />

        <article class="message is-dark mt-3" v-if="!repositoryStore.$state.isReposSet && !repositoryStore.$state.isLoading">
          <div class="message-header">
            <p>Ooopsi...</p>
          </div>

          <div class="message-body">
            This account does not have any public repositories
          </div>
        </article>
      </div>
    </div>
  </div>
</template>