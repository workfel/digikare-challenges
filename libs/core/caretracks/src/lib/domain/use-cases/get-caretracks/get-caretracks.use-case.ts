import {IUsecase} from "@digikare-challenges/core-domain";
import {ListCaretrackPresentation} from "../../ports/presenters/list-caretracks.presentation";
import {CaretrackRepository} from "../../repositories";
import {Caretrack} from "../../entities";

export class GetCaretracksUseCase implements IUsecase<void, ListCaretrackPresentation> {

  constructor(private readonly caretrackRepository: CaretrackRepository) {
  }

  async execute(request: void, presenter: ListCaretrackPresentation): Promise<void> {
    presenter.displayLoading();
    const caretracks: Caretrack[] = await this.caretrackRepository.getMyCaretracks();
    presenter.hideLoading();
    presenter.displayCaretracks(caretracks);

  }

}
