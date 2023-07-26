import {describe, test} from "vitest";
import {Arg, Substitute, SubstituteOf} from "@fluffy-spoon/substitute";
import {GetCaretrackUseCase} from "./get-caretracks.use-case";
import {CaretrackRepository} from "../../repositories";
import {CaretrackBuilder} from "../../entities";
import {GetCaretrackPresentation} from "../../ports/presenters/get-caretrack.presentation";

describe(`Get caretrack use case`, () => {
  let caretrackRepository: SubstituteOf<CaretrackRepository>;
  let usecase: GetCaretrackUseCase;

  beforeEach(() => {
    caretrackRepository = Substitute.for<CaretrackRepository>();
    usecase = new GetCaretrackUseCase(caretrackRepository);
  });

  test(`notify caretrack loaded when successfull `, async () => {
    // Arrange
    const presenter = Substitute.for<GetCaretrackPresentation>();
    const caretrack1 = new CaretrackBuilder().build();
    caretrackRepository.getCaretrackById(caretrack1.id).resolves(caretrack1)

    // Act
    await usecase.execute(caretrack1.id, presenter);

    // Assert
    presenter.received(1).displayLoading();
    presenter.received(1).hideLoading();
    presenter.received(1).notifyCaretrack(Arg.is((caretrack) => {
      return caretrack1.id === caretrack.id
    }))
  })
  test(`notify error caretrack when not found `, async () => {
    // Arrange
    const presenter = Substitute.for<GetCaretrackPresentation>();
    const caretrack1 = new CaretrackBuilder().build();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    caretrackRepository.getCaretrackById(caretrack1.id).resolves(undefined)

    // Act
    await usecase.execute(caretrack1.id, presenter);

    // Assert
    presenter.received(1).notifyCaretrackNotFound(caretrack1.id)
    presenter.received(0).notifyCaretrack(Arg.any())
  })


})
