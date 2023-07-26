import {describe, test} from "vitest";
import {Arg, Substitute, SubstituteOf} from "@fluffy-spoon/substitute";
import {GetCaretracksUseCase} from "./get-caretracks.use-case";
import {ListCaretrackPresentation} from "../../ports/presenters/list-caretracks.presentation";
import {CaretrackRepository} from "../../repositories";
import {CaretrackBuilder} from "../../entities";

describe(`Get caretracks use case`, () => {
  let caretrackRepository: SubstituteOf<CaretrackRepository>;
  let usecase: GetCaretracksUseCase;

  beforeEach(() => {
    caretrackRepository = Substitute.for<CaretrackRepository>();
    usecase = new GetCaretracksUseCase(caretrackRepository);
  });

  test(`display list of caretracks`, async () => {
    // Arrange
    const presenter = Substitute.for<ListCaretrackPresentation>();
    caretrackRepository.getMyCaretracks().resolves([
      new CaretrackBuilder().build(),
      new CaretrackBuilder().build()
    ])

    // Act
    await usecase.execute(undefined, presenter);

    // Assert
    presenter.received(1).displayLoading();
    presenter.received(1).hideLoading();
    presenter.received(1).displayCaretracks(Arg.is((caretracks) => {
      return caretracks.length === 2
    }))
  })


})
