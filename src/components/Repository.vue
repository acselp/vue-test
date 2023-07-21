<script setup>

import {onMounted, ref} from "vue";


const user = ref({});

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
      Link: <a :href="link">{{name}}</a>
    </div>
  </div>

</template>