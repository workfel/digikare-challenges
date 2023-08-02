import {
  AddCaretrackErrorMessages,
  AddCaretrackErrors,
  AddCaretrackFields,
  AddCaretrackPresentation,
  AddCaretrackRequest,
  AddCaretrackUseCase,
  Caretrack
} from "../../domain";
import {Navigate, NavigationRoutes, PresenterStore} from "@digikare-challenges/core-domain";
import {Observable} from "rxjs";
import {select} from "@ngneat/elf";

export interface AddCaretrackPresenterViewModelErrors {
  emailErrors: AddCaretrackErrorMessages | undefined,
  interventionDateError: AddCaretrackErrorMessages | undefined
}

export interface AddCaretrackPresenterViewModel {
  email: string,
  interventionIds: string[],
  interventionDate: string
  errors: AddCaretrackPresenterViewModelErrors | undefined
}

export class AddCaretrackPresenter extends PresenterStore<AddCaretrackPresenterViewModel> implements AddCaretrackPresentation {

  constructor(
    private readonly addCaretrackUseCase: AddCaretrackUseCase,
    private readonly navigate: Navigate) {
    super('add-caretrack', {
      email: '',
      interventionIds: [
        'ptg',
        'pth',
        'lca'
      ],
      interventionDate: '',
      errors: undefined
    });
  }

  async create(request: Omit<Caretrack, "id">) {
    await this.addCaretrackUseCase.execute(
      new AddCaretrackRequest(
        request.email,
        request.interventionDate,
        request.interventionId,
        request.firstName,
        request.lastName,
        request.sex), this)
  }

  notifyAddCaretrackInvalid(errors: AddCaretrackErrors): void {
    this.update({
      errors: {
        interventionDateError: errors.get(AddCaretrackFields.interventionDate) ?? undefined,
        emailErrors: errors.get(AddCaretrackFields.email) ?? undefined
      }
    })
  }

  notifyAdded(caretrack: Caretrack): void {
    this.navigate.navigate(NavigationRoutes.CARETRACK(caretrack.id))
  }

  interventionIds$(): Observable<string[]> {
    return this.vm().pipe(select(state => state.interventionIds))
  }

  errors$(): Observable<AddCaretrackPresenterViewModelErrors | undefined> {
    return this.vm().pipe(select(state => state.errors))
  }

  async validate(request: Omit<Caretrack, "id">) {
    await this.addCaretrackUseCase.validate(
      new AddCaretrackRequest(
        request.email,
        request.interventionDate,
        request.interventionId,
        request.firstName,
        request.lastName,
        request.sex), this)
  }
}
