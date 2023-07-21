<script setup>

const props = defineProps({
  name: String,
  link: String,
  stars: String,
  owner: String
})


</script>

<template>
  <div class="repos-card card p-4 mt-4">
    <div class="repo-name">
      Repository name: {{name}}
    </div>
    <div class="repo-name">
      Stars: {{stars}}
    </div>
    <div class="repo-name">
      Link: <a :href="link">{{link}}</a>
    </div>
  </div>
</template>

<style>
.repos-card {
  background-color: #202526;
  color: darkgrey;
}
</style>