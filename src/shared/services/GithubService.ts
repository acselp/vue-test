import axios from 'axios'
import type {UserModel} from "@/shared/models/UserModel";
import type {RepositoryModel} from "@/shared/models/RepositoryModel";

export class GithubService {
    axiosClient = axios.create({
        baseURL: 'https://api.github.com/'
    })

    usernamePlaceholder = "{username_placeholder}";
    apiUrlGetUser = "users";
    apiUrlGetRepos = `users/${this.usernamePlaceholder}/repos`;

    async getUser(username: string) {
        const { data } = await this.axiosClient.get(`${this.apiUrlGetUser}/${username}`);

        return data as UserModel
    }

    async getRepository(username: string) {
        const { data } = await this.axiosClient.get(this.apiUrlGetRepos.replace(this.usernamePlaceholder, username));

        return data as RepositoryModel[]
    }
}