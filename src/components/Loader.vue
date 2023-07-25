<script setup>

defineProps({
  isActive: true
})

</script>

<template>

  <div class="loader-div" v-if="isActive">
    <progress class="progress is-small is-primary" max="100">15%</progress>
  </div>

</template>