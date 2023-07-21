import { ref } from 'vue'
import { defineStore } from 'pinia'
import {getGithubUserDataByUsername} from "@/shared/services/github-service";

export const useUserStore = defineStore('user', () => {
    const user = ref({})
    const isUserSet = ref(false)
    const isLoading = ref(false)
    const showError = ref(false)
    const errorMessage = ref("")

    const UserNotFoundMessage = "User not found";
    const ApiRateLimitExcededMessage = "API rate limit exceeded";

    function $setError () {
        showError.value = true;
        setTimeout(() => showError.value = false, 3000)
    }

    function $resetError () {
        showError.value = false;
    }

    async function $setUser(username: string) {
        isLoading.value = true;

        getGithubUserDataByUsername(username)
            .then((data) => {
                user.value = data
                $resetError();
                isLoading.value = false;
                isUserSet.value = true;
            })
            .catch((err) => {

                if (err.response.status === 403 && err.code === 'ERR_BAD_REQUEST')
                    errorMessage.value = ApiRateLimitExcededMessage;

                if (err.response.status === 404 && err.code === 'ERR_BAD_REQUEST')
                    errorMessage.value = UserNotFoundMessage;

                $setError();
                $resetUser();
            })
    }

    async function $resetUser() {
        isLoading.value = false;
        isUserSet.value = false;
    }

    return { user, $setUser, isUserSet, isLoading, showError, $resetError, errorMessage }
})
