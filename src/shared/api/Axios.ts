import axios from "axios";

export class Axios {
    private static readonly baseUrl = 'https://api.github.com/';

    public static CreateAxios() {
        return axios.create({
            baseURL: this.baseUrl
        })
    }
}