<script setup lang="ts">

import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import type {RepositoryDto} from "@/shared/dto/RepositoryDto";
import {useRepositoryStore} from "@/stores/RepositoryStore";

const route = useRoute();

const repository = ref<RepositoryDto>();
const repositoryStore = useRepositoryStore();

const {username, repositoryName} = route.params;

onMounted(() => {
  repository = repositoryStore.repo;
})

</script>

<template>

  <div class="main-container">
    <div class="repository-detail-container is-center is-flex is-justify-content-center">
      <div class="card repo-detail-card">
        <div class="card-content user-repo-links">
          <ul role="list" class="list-style-none is-align-items-baseline">
            <a href="https://github.com">
              <i class="fa-brands fa-github fa-2xl mr-4" style="color: #ffffff;"></i>
            </a>
            <li>
              <router-link :to="`/repos/${username}`">
                <span class="">
                  {{username}}
                </span>
              </router-link>
              <span class="">/</span>
            </li>

            <li>
              <a href="#">
                <span class="">
                  {{repositoryName}}
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div class="card-content">
          <span>Stars: &nbsp; </span><i class="fa-regular fa-star" style="color: #fff700;"></i>
        </div>
      </div>
    </div>
  </div>

</template>