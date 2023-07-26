import {Caretrack} from "../../domain/entities/caretrack";
import {PresenterStore} from "@digikare-challenges/core-domain";
import {GetCaretrackPresentation} from "../../domain/ports/presenters/get-caretrack.presentation";
import {GetCaretrackUseCase} from "../../domain/use-cases/get-caretrack";


export interface GetCaretrackPresenterViewModel {
  caretrack: Caretrack | undefined,
  loading: boolean
  error: string | undefined
}

export class GetCaretrackPresenter extends PresenterStore<GetCaretrackPresenterViewModel> implements GetCaretrackPresentation {

  constructor(
    private readonly getCaretrackUseCase: GetCaretrackUseCase) {
    super('add-caretrack', {
      caretrack: undefined,
      loading: false,
      error: undefined
    });
  }

  fetchCaretrack(id: string): void {
    this.getCaretrackUseCase.execute(id, this)
  }


  displayLoading(): void {
    this.update({loading: true})
  }

  hideLoading(): void {
    this.update({loading: false})
  }

  notifyCaretrack(caretrack: Caretrack): void {
    this.update({
      caretrack
    })
  }

  notifyCaretrackNotFound(id: string): void {
    this.update({
      error: "caretrack_not_found"
    })
  }

}
