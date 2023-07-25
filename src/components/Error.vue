<script setup>

defineProps({
  message: String
})

</script>

<template>

  <p class="notification is-danger mt-3">
    {{message}}
  </p>

</template>