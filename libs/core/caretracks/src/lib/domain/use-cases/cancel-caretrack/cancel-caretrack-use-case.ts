import {IUsecase} from "@digikare-challenges/core-domain";
import {CancelCaretrackPresentation} from "../../ports/presenters/cancel-caretrack.presentation";
import {Caretrack, CaretrackRepository, InterventionDate} from "@digikare-challenges/core/caretracks";

export class CancelCaretrackUseCase implements IUsecase<Caretrack, CancelCaretrackPresentation> {

  constructor(private readonly caretrackRepository: CaretrackRepository) {
  }

  async execute(request: Caretrack, presenter: CancelCaretrackPresentation): Promise<void> {

    if (!InterventionDate.isInterventionDateGreatherThanToday(request.interventionDate)) {
      presenter.notifyCaretrackNotCanceledDateOverdue();
      return;
    }
    await this.caretrackRepository.cancelCaretrack(request.id);
    presenter.notifyCaretrackCanceled();
  }

}
