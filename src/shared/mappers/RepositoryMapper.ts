import type {RepositoryModel} from "@/shared/models/RepositoryModel";
import type {RepositoryDto} from "@/shared/dto/RepositoryDto";

export class RepositoryMapper {
    toDtos(models: RepositoryModel[]) {
        let dtos = [] as RepositoryDto[];

        models.forEach((item) => {
            dtos.push({
                name: item.name,
                link: item.html_url,
                starsCount: item.stargazers_count
            } as RepositoryDto)
        })

        return dtos;
    }

    toDto(model: RepositoryModel) {
        return ({
            name: model.name,
            link: model.html_url,
            starsCount: model.stargazers_count
        } as RepositoryDto)
    }
}