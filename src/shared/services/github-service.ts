import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'https://api.github.com/'
})

export async function getGithubUserDataByUsername(username: string) {
    const apiUrl = `users/${username}`;
    const { data } = await axiosClient.get(apiUrl);

    return data
}

export async function getGithubUserReposDataByUsername(username: string) {
    const apiUrl = `users/${username}/repos`;
    const { data } = await axiosClient.get(apiUrl);

    return data
}