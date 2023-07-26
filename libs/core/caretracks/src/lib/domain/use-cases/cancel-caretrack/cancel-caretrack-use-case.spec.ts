import {beforeEach, describe} from "vitest";
import {Arg, Substitute, SubstituteOf} from "@fluffy-spoon/substitute";
import {CaretrackBuilder, CaretrackRepository} from "@digikare-challenges/core/caretracks";
import {CancelCaretrackUseCase} from "./cancel-caretrack-use-case";
import {CancelCaretrackPresentation} from "../../ports/presenters/cancel-caretrack.presentation";

describe("CancelCaretrackUseCase", () => {
  let caretrackRepository: SubstituteOf<CaretrackRepository>;
  let usecase: CancelCaretrackUseCase;

  beforeEach(() => {
    caretrackRepository = Substitute.for<CaretrackRepository>();
    usecase = new CancelCaretrackUseCase(caretrackRepository);
  });

  test(`notify when caretrack is canceled`, async () => {
    // Arrange
    const presenter = Substitute.for<CancelCaretrackPresentation>();
    const caretrack = new CaretrackBuilder().build();
    // Act
    await usecase.execute(caretrack, presenter);

    // Assert
    presenter.received(1).notifyCaretrackCanceled();
    caretrackRepository.received(1).cancelCaretrack(Arg.is(id => id === caretrack.id));
  });

  test(`notify when caretrack cannot be canceled when intervention date is already pass`, async () => {
    // Arrange
    const presenter = Substitute.for<CancelCaretrackPresentation>();
    const caretrack = new CaretrackBuilder()
      .withInterventionDate(new Date('1990-10-20').toISOString()).build();
    // Act
    await usecase.execute(caretrack, presenter);

    // Assert
    presenter.received(0).notifyCaretrackCanceled();
    presenter.received(1).notifyCaretrackNotCanceledDateOverdue();
  });
});
