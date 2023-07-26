import {IUsecase} from "@digikare-challenges/core-domain";
import {CaretrackRepository} from "../../repositories";
import {Caretrack} from "../../entities";
import {GetCaretrackPresentation} from "../../ports/presenters/get-caretrack.presentation";

export class GetCaretrackUseCase implements IUsecase<string, GetCaretrackPresentation> {

  constructor(private readonly caretrackRepository: CaretrackRepository) {
  }

  async execute(request: string, presenter: GetCaretrackPresentation): Promise<void> {
    presenter.displayLoading();
    const caretrack: Caretrack | undefined = await this.caretrackRepository.getCaretrackById(request);
    presenter.hideLoading();
    if (caretrack) {
      presenter.notifyCaretrack(caretrack);
    } else {
      presenter.notifyCaretrackNotFound(request)
    }


  }

}
