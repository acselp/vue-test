import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {getGithubUserDataByUsername} from "@/shared/services/github-service";
import {useNotificationStore} from "@/stores/notification";

export const useUserStore = defineStore('user', () => {
    const user = ref({})
    const isUserSet = ref(false)
    const isLoading = ref(false)
    const notificationStore = useNotificationStore();
    const userStore = useUserStore();

    async function $setUser(username: string) {
        isLoading.value = true;
        getGithubUserDataByUsername(username)
            .then((data) => {
                user.value = data
                notificationStore.$resetError();
                isLoading.value = false;
                isUserSet.value = true;
            })
            .catch((err) => {
                userStore.$resetUser()
                notificationStore.$setError();
            })
    }

    async function $resetUser() {
        isLoading.value = false;
        isUserSet.value = false;
    }

    return { user, $setUser, $resetUser, isUserSet, isLoading }
})
