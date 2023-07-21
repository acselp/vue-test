import { ref } from 'vue'
import { defineStore } from 'pinia'
import {GithubService} from "@/shared/services/GithubService";
import type {UserDto} from "@/shared/dto/UserDto";
import {UserMapper} from "@/shared/mappers/UserMapper";

export const useUserStore = defineStore('user', () => {
    const user = ref({} as UserDto)
    const isUserSet = ref(false)
    const isLoading = ref(false)
    const showError = ref(false)
    const errorMessage = ref("")

    const userMapper = new UserMapper();
    const githubService = new GithubService();

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

        githubService.getUser(username)
            .then((data) => {
                user.value = userMapper.toDto(data);

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

    return { user, $setUser, isUserSet, isLoading, showError, errorMessage }
})
