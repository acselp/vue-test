import { defineStore } from 'pinia'
import { ref} from "vue";
import {GithubService} from "@/shared/services/GithubService";
import type {RepositoryDto} from "@/shared/dto/RepositoryDto";
import {RepositoryMapper} from "@/shared/mappers/RepositoryMapper";

export const useRepositoryStore = defineStore('repository', () => {
    const repos = ref([] as RepositoryDto[]);
    const repo = ref({} as RepositoryDto);
    const isReposSet = ref(false);
    const isLoading = ref(false);
    const showError = ref(false)
    const githubService = new GithubService();
    const repositoryMapper = new RepositoryMapper();

    function $setError () {
        showError.value = true;
        setTimeout(() => showError.value = false, 1000)
    }

    function $resetError () {
        showError.value = false;
    }
    async function $setRepos(username: string) {
        isLoading.value = true;
        githubService.getRepositoriesByUsername(username)
            .then((data) => {
                repos.value = repositoryMapper.toDtos(data);

                $resetError();
                isLoading.value = false;
                isReposSet.value = repos.value.length !== 0;
            })
            .catch((error) => {
                $resetRepos();
                $setError();
            })
    }

    async function $setRepo(username: string, repoName: string) {
        isLoading.value = true;
        githubService.getRepositoryByName(username, repoName)
            .then((data) => {
                repo.value = repositoryMapper.toDto(data);

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
        repos.value = [];
    }

    return { repos, $setRepos, isReposSet, isLoading, $resetRepos, $setRepo };
})
