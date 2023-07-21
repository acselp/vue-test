<script setup>
const props = defineProps({
  username: String,
  profileImageUrl: String,
  bio: String,
  followers: String,
  linkToProfile: String
})

</script>

<template>
  <div class="card user-card">
    <div class="card-content">
      <div class="content">
        <h6>Username: {{username}}</h6>
        <figure class="image is-128x128">
          <img class="is-rounded" v-bind:src="profileImageUrl">
        </figure>
        <div class="user-card card card-content has-background-grey-darker">
          <div class="is-flex is-flex-direction-column">
            <span>Bio: {{bio}}</span>
            <span>Followers: {{followers}}</span>
          </div>
          <div>
            <a :href="linkToProfile">Visit profile</a>
          </div>
          <router-link to="/repos">Repositories</router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
.user-card {
  color: #E6EDF3;
}

.user-card {
  margin-top: 20px;
}
</style>