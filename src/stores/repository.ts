import { defineStore } from 'pinia'
import {ref} from "vue";
import {getGithubUserReposDataByUsername} from "@/shared/services/github-service";

export const useRepositoryStore = defineStore('repository', () => {
    const repos = ref([]);
    const isReposSet = ref(false);
    const isLoading = ref(false);
    const showError = ref(false)

    function $setError () {
        showError.value = true;
    }

    function $resetError () {
        showError.value = false;
    }
    function $setRepos(username: string) {
        isLoading.value = true;
        getGithubUserReposDataByUsername(username)
            .then((data) => {
                repos.value = data
                $resetError();
                isLoading.value = false;
                isReposSet.value = true;
            })
            .catch((error) => {
                $resetRepos();
                $setError();
            })
    }

    function $resetRepos() {
        isLoading.value = false;
        isReposSet.value = false;
    }

    return { repos, $setRepos, isReposSet };
})
