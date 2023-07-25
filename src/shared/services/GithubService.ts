import type {UserModel} from "@/shared/models/UserModel";
import type {RepositoryModel} from "@/shared/models/RepositoryModel";
import {Axios} from "@/shared/api/Axios";

export class GithubService {
    private readonly axiosClient = Axios.CreateAxios();
    private readonly apiUrlGetUser = "users";
    apiUrlGetRepos = (username: string) =>  `users/${username}/repos`;

    async getUser(username: string): Promise<UserModel> {
        const { data } = await this.axiosClient.get<UserModel>(`${this.apiUrlGetUser}/${username}`);

        return data
    }

    async getRepositoriesByUsername(username: string): Promise<RepositoryModel[]> {
        const { data } = await this.axiosClient.get(this.apiUrlGetRepos(username));

        return data
    }

    async getRepositoryByName(username: string, repositoryName: string): Promise<RepositoryModel> {
        const { data } = await this.axiosClient.get(`${this.apiUrlGetUser}/${username}/${repositoryName}`);

        return data
    }
}