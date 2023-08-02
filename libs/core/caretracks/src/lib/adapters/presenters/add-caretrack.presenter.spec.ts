import {
  AddCaretrackErrorMessages,
  AddCaretrackFields,
  AddCaretrackPresenter,
  AddCaretrackUseCase,
  Caretrack
} from "@digikare-challenges/core/caretracks";
import {beforeEach, describe} from "vitest";
import {Arg, Substitute, SubstituteOf} from "@fluffy-spoon/substitute";
import {Navigate} from "@digikare-challenges/core-domain";

describe(`AddCaretrackPresenter`, () => {

  let addCaretrackUseCase: SubstituteOf<AddCaretrackUseCase>;
  let navigate: SubstituteOf<Navigate>;
  let presenter: AddCaretrackPresenter;

  beforeEach(() => {

    addCaretrackUseCase = Substitute.for<AddCaretrackUseCase>();
    navigate = Substitute.for<Navigate>();
    presenter = new AddCaretrackPresenter(addCaretrackUseCase, navigate);
  })


  test(`display intervention date error on validate date`, async () => {
    // Arrange
    const validateRequest: Omit<Caretrack, "id"> = {
      email: "", firstName: "", interventionDate: "", interventionId: "", lastName: "", sex: 'm'

    }

    addCaretrackUseCase.validate(Arg.all()).returns(
      new Map<AddCaretrackFields, AddCaretrackErrorMessages>().set(AddCaretrackFields.interventionDate, "intervention_date_greather_than_today")
    )

    // Act
    presenter.validate(validateRequest);

    // Assert
    const errors = await presenter.errors$().toPromise()
    expect(errors).toBeTruthy();
    if (errors) {
      expect(errors.interventionDateError).toBe('intervention_date_greather_than_today')
    }

  })
})
