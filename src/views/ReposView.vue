<script setup lang="ts">

import Repository from "@/components/Repository.vue";
import {useRepositoryStore} from "@/stores/repository";

const repositoryStore = useRepositoryStore();

</script>

<template>
  <div class="home-main-container">
    <div class="repositories-container">
      <div class="repos">
        <router-link class="is-info button" to="/"> &lt;- Back to home </router-link>
        <Repository v-for="repo in repositoryStore.$state.repos" :link="repo.html_url" :name="repo.name" :stars="repo.stargazers_count" />

        <article class="message is-dark mt-3" v-if="!repositoryStore.$state.isReposSet">
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
