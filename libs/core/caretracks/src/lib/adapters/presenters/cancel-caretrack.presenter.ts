import {Navigate, NavigationRoutes, PresenterStore} from "@digikare-challenges/core-domain";
import {CancelCaretrackPresentation, CancelCaretrackUseCase} from "../../domain";
import {Caretrack} from "@digikare-challenges/core/caretracks";


export type CancelErrorType = 'intervention_date_overdue';

export interface CancelCaretrackPresenterViewModel {
  caretrack: Caretrack | undefined,
  loading: boolean,
  error: CancelErrorType | undefined
}

export class CancelCaretrackPresenter extends PresenterStore<CancelCaretrackPresenterViewModel> implements CancelCaretrackPresentation {

  constructor(
    private readonly cancelCaretrackUseCase: CancelCaretrackUseCase,
    private readonly navigate: Navigate) {
    super('add-caretrack', {
      caretrack: undefined,
      loading: false,
      error: undefined
    });
  }

  cancel(caretrack: Caretrack) {
    this.update({
      caretrack
    })
    this.cancelCaretrackUseCase.execute(caretrack, this)
  }

  notifyCaretrackCanceled(): void {
    this.navigate.navigate(NavigationRoutes.HOME)
  }

  notifyCaretrackNotCanceledDateOverdue(): void {
    this.update({
      error: 'intervention_date_overdue'
    })
  }


}
