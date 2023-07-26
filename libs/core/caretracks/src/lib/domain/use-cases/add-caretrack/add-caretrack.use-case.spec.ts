import {beforeEach, describe} from "vitest";
import {CaretrackRepository} from "../../repositories/caretrack.repository";
import {Arg, Substitute, SubstituteOf} from "@fluffy-spoon/substitute";
import {AddCaretrackUseCase} from "./add-caretrack.use-case";
import {AddCaretrackFields, AddCaretrackPresentation} from "../../ports/presenters/add-caretrack.presentation";
import {AddCaretrackRequest} from "../../ports/requests/add-caretrack.request";
import {Sex} from "../../entities/sex";

describe(`Add new caretrack use case`, () => {

  let caretrackRepository: SubstituteOf<CaretrackRepository>;
  let usecase: AddCaretrackUseCase;

  beforeEach(() => {
    caretrackRepository = Substitute.for<CaretrackRepository>();
    usecase = new AddCaretrackUseCase(caretrackRepository);
  });

  test(`should not add new caretrack when email is empty`, async () => {
    // Arrange
    const email = '';
    const interventionDate = '';
    const interventionId = '';
    const firstName = '';
    const lastName = '';
    const sex: Sex = 'f';
    const presenter = Substitute.for<AddCaretrackPresentation>();


    // Act
    await usecase.execute(new AddCaretrackRequest(email, interventionDate, interventionId, firstName, lastName, sex), presenter)

    // Assert
    presenter.received(1).notifyAddCaretrackInvalid(Arg.is(
      errors => {
        return errors.get(AddCaretrackFields.email) === 'email_required'
      }
    ))
  });

  test(`should not add new caretrack when intervention date is lower than today`, async () => {
    // Arrange
    const email = 'email@email.com';
    const interventionDate = new Date('1999-01-01').toISOString();
    const interventionId = '';
    const firstName = '';
    const lastName = '';
    const sex: Sex = 'f';
    const presenter = Substitute.for<AddCaretrackPresentation>();


    // Act
    await usecase.execute(new AddCaretrackRequest(email, interventionDate, interventionId, firstName, lastName, sex), presenter)

    // Assert
    presenter.received(1).notifyAddCaretrackInvalid(Arg.is(
      errors => {
        return errors.get(AddCaretrackFields.interventionDate) === 'intervention_date_greather_than_today'
      }
    ))
  });

  test(`add caretrack to repository when valid`, async () => {
    // Arrange
    const email = 'email@email.com';
    const interventionDate = new Date('2200-01-01').toISOString();
    const interventionId = 'ss';
    const firstName = 'john';
    const lastName = 'doe';
    const sex: Sex = 'f';
    const presenter = Substitute.for<AddCaretrackPresentation>();


    // Act
    await usecase.execute(new AddCaretrackRequest(email, interventionDate, interventionId, firstName, lastName, sex), presenter)

    // Assert
    caretrackRepository.received(1).addCaretrack(Arg.is((caretrack) => {
      return caretrack.email === email
    }))
    presenter.received(1).notifyAdded(Arg.any())

  });
})
