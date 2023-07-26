import {Caretrack} from "@digikare-challenges/core/caretracks";

export interface GetCaretrackPresentation {
  displayLoading(): void;

  hideLoading(): void;

  notifyCaretrack(caretrack: Caretrack): void;

  notifyCaretrackNotFound(id: string): void;
}
