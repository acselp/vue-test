<script setup lang="ts">

import Repository from "@/components/Repository.vue";
import {useRepositoryStore} from "@/stores/RepositoryStore";
import ReposSkeleton from "@/components/ReposSkeleton.vue";
import {useUserStore} from "@/stores/UserStore";
import {useRoute} from "vue-router";

const repositoryStore = useRepositoryStore();
const userStore = useUserStore();
const route = useRoute();

const { isReposSet, repo, repoList, isLoading } = repositoryStore.$state;

repositoryStore.$setRepos(userStore.$state.user.username);

</script>

<template>
  <div class="main-container">
    <div class="repositories-container">
      <div class="repos">
        <router-link class="is-info button" to="/"> <i class="fa-solid fa-arrow-left">&nbsp;</i> Back to home </router-link>
        <Repository v-if="isReposSet" v-for="repo in repoList" :link="repo.link" :name="repo.name" :stars="repo.starsCount" />

        <ReposSkeleton v-if="isLoading && !isReposSet" />

        <article class="message is-dark mt-3" v-if="!isReposSet && !isLoading">
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