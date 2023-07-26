import {IUsecase} from "@digikare-challenges/core-domain";
import {AddCaretrackRequest} from "../../ports/requests";
import {
  AddCaretrackErrorMessages,
  AddCaretrackErrors,
  AddCaretrackFields,
  AddCaretrackPresentation
} from "../../ports/presenters";
import {CaretrackBuilder, InterventionDate} from "../../entities";
import {CaretrackRepository} from "../../repositories";

export class AddCaretrackUseCase implements IUsecase<AddCaretrackRequest, AddCaretrackPresentation> {


  constructor(private readonly caretrackRepository: CaretrackRepository) {
  }

  async execute(request: AddCaretrackRequest, presenter: AddCaretrackPresentation): Promise<void> {
    const errors = this.validate(request, presenter);
    if (!errors.size) {
      const caretrack = new CaretrackBuilder()
        .withEmail(request.email)
        .withInterventionDate(request.interventionDate)
        .withInterventionId(request.interventionId)
        .withFirstName(request.firstName)
        .withLastName(request.lastName)
        .withSex(request.sex)
        .build()
      await this.caretrackRepository.addCaretrack(caretrack);
      presenter.notifyAdded(caretrack);
    }
  }

  validate(request: AddCaretrackRequest, presenter: AddCaretrackPresentation): AddCaretrackErrors {
    const errors: AddCaretrackErrors = new Map<AddCaretrackFields, AddCaretrackErrorMessages>();
    if (request.email === null || !request.email.length) {
      errors.set(AddCaretrackFields.email, "email_required");
    }

    if (request.interventionDate === null || !request.interventionDate.length) {
      errors.set(AddCaretrackFields.interventionDate, "intervention_date_required");
    } else if (!InterventionDate.isInterventionDateGreatherThanToday(request.interventionDate)) {
      errors.set(AddCaretrackFields.interventionDate, "intervention_date_greather_than_today");
    }

    presenter.notifyAddCaretrackInvalid(errors);
    return errors;

  }

}
