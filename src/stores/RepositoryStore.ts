import { defineStore } from 'pinia'
import { ref } from "vue";
import {GithubService} from "@/shared/services/GithubService";
import type {RepositoryDto} from "@/shared/dto/RepositoryDto";
import {RepositoryMapper} from "@/shared/mappers/RepositoryMapper";

export const useRepositoryStore = defineStore('repository', () => {
    const repoList = ref<RepositoryDto[]>();
    const repo = ref<RepositoryDto>();
    const isReposSet = ref<boolean>();
    const isLoading = ref<boolean>();
    const showError = ref<boolean>();

    const githubService = new GithubService();

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
                repoList.value = RepositoryMapper.toDtoList(data);

                $resetError();
                isLoading.value = false;
                isReposSet.value = repoList.value.length !== 0;
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
                repo.value = RepositoryMapper.toDto(data);

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
        repoList.value = [];
    }

    return { repoList, $setRepos, isReposSet, isLoading, $resetRepos, repo };
})
