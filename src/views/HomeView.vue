<script setup lang="ts">
import {ref} from "vue";
import {useUserStore} from "@/stores/user";
import UserCard from "@/components/UserCard.vue";
import Error from "@/components/Error.vue";

const userStore = useUserStore();

const username = ref("");

async function setUser(username: string) {
  await userStore.$setUser(username);
}

</script>

<template>
  <div class="home-main-container">
    <div class="form-container is-center is-justify-content-center">

      <div class="field">
        <label class="label">Github Username</label>
        <div class="control has-icons-right">
          <input class="input" v-on:keyup.enter="setUser(username.valueOf())" v-model="username" type="text" placeholder="ex. mario123">
          <span class="icon is-small is-left" v-if="userStore.$state.isLoading">
              <i class="fa fa-refresh fa-spin"></i>
          </span>
          <span class="icon is-large is-left" v-if="userStore.$state.isUserSet && !userStore.$state.isLoading">
              <i class="fa fa-check"></i>
          </span>
          <span class="icon is-large is-left" v-if="userStore.$state.showError && !userStore.$state.isLoading">
              <i class="fa fa-circle-exclamation"></i>
          </span>
        </div>
      </div>

      <div class="control">
        <button class="button is-link" @click="setUser(username.valueOf())">Search</button>
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

<style>
.loader-div {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}

.form-container {
  width: 40%;
  margin: auto;
  padding-top: 50px;
}
</style>
