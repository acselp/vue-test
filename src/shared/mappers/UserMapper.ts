import type {UserModel} from "@/shared/models/UserModel";
import type {UserDto} from "@/shared/dto/UserDto";

export class UserMapper {
    static toDto(model: UserModel): UserDto {
        return {
            username: model.login,
            linkToProfile: model.html_url,
            avatarUrl: model.avatar_url,
            followersCount: model.followers,
            bio: model.bio
        }
    }
}