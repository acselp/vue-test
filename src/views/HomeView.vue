<script setup lang="ts">
import {ref} from "vue";
import {useUserStore} from "@/stores/user";
import UserCard from "@/components/UserCard.vue";
import Error from "@/components/Error.vue";
import {useRepositoryStore} from "@/stores/repository";

const userStore = useUserStore();
const repositoryStore = useRepositoryStore();

const username = ref("");

async function setUser(username: string) {
  await repositoryStore.$resetRepos();
  await userStore.$setUser(username);
}

</script>

<template>
  <div class="home-main-container">
    <div class="form-container is-center is-justify-content-center">

      <div class="is-flex is-align-items-flex-end">
        <div class="field">
          <label class="label">Github Username</label>
          <div class="control">
            <div class="is-flex">
              <input class="input is-fullwidth" v-on:keyup.enter="setUser(username.valueOf())" v-model="username" type="text" placeholder="ex. mario123">

              <span class="icon is-large has-text-light" v-if="userStore.$state.isLoading">
                <i class="fa fa-refresh fa-spin"></i>
              </span>

              <span class="icon is-large has-text-success" v-if="userStore.$state.isUserSet && !userStore.$state.isLoading">
                <i class="fa fa-check"></i>
              </span>

              <span class="icon is-large has-text-danger" v-if="userStore.$state.showError && !userStore.$state.isLoading">
                <i class="fa fa-circle-exclamation"></i>
              </span>
              <div class="control ml-3">
                <button class="button is-link" @click="setUser(username.valueOf())">Search</button>
              </div>
            </div>
          </div>
        </div>


      </div>

      <UserCard
          v-if="userStore.$state.isUserSet"
          :username="userStore.$state.user.login"
          :profileImageUrl="userStore.$state.user.avatar_url"
          :bio="userStore.$state.user.bio"
          :followers="userStore.$state.user.followers"
          :link-to-profile="userStore.$state.user.html_url"
      />

      <div class="loader-div" v-if="userStore.$state.isLoading">
        <progress class="progress is-small is-primary" max="100">15%</progress>
      </div>

      <Error v-if="userStore.$state.showError" :message="userStore.$state.errorMessage" />

    </div>

  </div>
</template>