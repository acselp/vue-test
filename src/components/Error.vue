<script setup>
import {useNotificationStore} from "@/stores/notification";

const props = defineProps({
  message: String
})

const notificationStore = useNotificationStore();

</script>

<template>
  <div class="notification is-danger custom-notification">
    <button @click="notificationStore.$resetError()" class="delete"></button>
    {{message}}
  </div>
</template>