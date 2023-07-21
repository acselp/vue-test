<script setup>

import {onMounted, ref} from "vue";

const props = defineProps({
  message: String
})

</script>

<template>
  <div class="notification is-danger custom-notification">
    {{message}}
  </div>
</template>

<style>
.custom-notification {
  margin-top: 10px;
}
</style>