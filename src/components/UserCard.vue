<script setup>

const props = defineProps({
  user: {}
})

</script>

<template>

  <div class="card user-card">
    <div class="card-content">
      <div class="content">
        <h6>Username: {{user.username}}</h6>
        <figure class="image is-128x128">
          <img class="is-rounded" v-bind:src="user.avatarUrl">
        </figure>
        <div class="user-card card card-content has-background-grey-darker">
          <div class="is-flex is-flex-direction-column">
            <span>Bio: {{bio}}</span>
            <span>Followers: {{user.followersCount}}</span>
          </div>
          <div>
            <a :href="user.linkToProfile">Visit profile</a>
          </div>
          <router-link to="/repos">Repositories</router-link>
        </div>
      </div>
    </div>
  </div>

</template>