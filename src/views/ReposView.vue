<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useUserStore} from "@/stores/user";
import UserCard from "@/components/UserCard.vue";
import Error from "@/components/Error.vue";
import {useNotificationStore} from "@/stores/notification";

const userStore = useUserStore();
const notificationStore = useNotificationStore();

const username = ref("");

async function setUser(username: string) {
  await userStore.$setUser(username);
}

</script>

<template>
  <div class="home-main-container">
    <div class="repositories-container is-center is-justify-content-center">

    </div>
  </div>
</template>
