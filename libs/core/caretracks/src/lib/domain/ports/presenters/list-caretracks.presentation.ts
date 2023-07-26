import {Caretrack} from "../../entities/caretrack";


export interface ListCaretrackPresentation {
  displayCaretracks(caretracks: Caretrack[]): void

  displayLoading(): void;

  hideLoading(): void;
}
