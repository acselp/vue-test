<script setup>

const props = defineProps({
  message: String
})


</script>

<template>
  <div class="notification is-danger custom-notification">
    {{message}}
  </div>
</template>