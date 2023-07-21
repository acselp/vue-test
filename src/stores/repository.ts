import { defineStore } from 'pinia'
import { ref} from "vue";
import {getGithubUserReposDataByUsername} from "@/shared/services/github-service";

export const useRepositoryStore = defineStore('repository', () => {
    const repos = ref([]);
    const isReposSet = ref(false);
    const isLoading = ref(false);
    const showError = ref(false)

    function $setError () {
        showError.value = true;
        setTimeout(() => showError.value = false, 1000)
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
                console.log(data);
                isLoading.value = false;
                isReposSet.value =  repos.value.length !== 0 ;
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
