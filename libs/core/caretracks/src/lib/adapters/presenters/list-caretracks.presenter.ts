import {Caretrack} from "../../domain/entities/caretrack";
import {PresenterStore} from "@digikare-challenges/core-domain";
import {ListCaretrackPresentation} from "../../domain/ports/presenters/list-caretracks.presentation";
import {GetCaretracksUseCase} from "../../domain/use-cases/get-caretracks/get-caretracks.use-case";
import {select} from "@ngneat/elf";


export interface ListCaretracksPresenterViewModel {
  caretracks: Caretrack[],
  loading: boolean
}

export class ListCaretracksPresenter extends PresenterStore<ListCaretracksPresenterViewModel> implements ListCaretrackPresentation {

  constructor(
    private readonly getCaretracksUseCase: GetCaretracksUseCase) {
    super('add-caretrack', {
      caretracks: [],
      loading: false
    });
  }

  fetchCaretracks(): void {
    this.getCaretracksUseCase.execute(undefined, this);
  }

  displayCaretracks(caretracks: Caretrack[]): void {
    this.update({
      caretracks
    })
  }

  caretracks$() {
    return this.vm().pipe(select((state) => state.caretracks));
  }

  displayLoading(): void {
    this.update({loading: true})
  }

  hideLoading(): void {
    this.update({loading: false})
  }

}
