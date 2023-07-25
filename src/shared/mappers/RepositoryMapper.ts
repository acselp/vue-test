import type {RepositoryModel} from "@/shared/models/RepositoryModel";
import type {RepositoryDto} from "@/shared/dto/RepositoryDto";

export class RepositoryMapper {
    static toDtoList(models: RepositoryModel[]): RepositoryDto[] {
        return models.map(this.toDto)
    }

    static toDto(model: RepositoryModel): RepositoryDto {
        return {
            name: model.name,
            link: model.html_url,
            starsCount: model.stargazers_count
        }
    }
}