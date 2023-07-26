import {InjectionToken, NgModule} from "@angular/core";
import {
  AddCaretrackPresenter,
  AddCaretrackUseCase,
  CancelCaretrackPresenter,
  CancelCaretrackUseCase,
  CaretrackRepository,
  CaretrackRepositoryInMemory,
  GetCaretrackPresenter,
  GetCaretracksUseCase,
  GetCaretrackUseCase,
  ListCaretracksPresenter
} from "@digikare-challenges/core/caretracks";
import {Navigation, Router} from "@angular/router";
import {Navigate, NavigationRoutes} from "@digikare-challenges/core-domain";


export const INavigation = new InjectionToken<Navigation>('Navigation');
export const ICaretrackRepository = new InjectionToken<CaretrackRepository>('CaretrackRepository');

@NgModule({

  providers: [
    {
      provide: INavigation,
      useFactory: (router: Router): Navigate => ({
        navigate(route: NavigationRoutes): Promise<void> {
          return router.navigateByUrl(route.toString()).then(() => Promise.resolve())
        }
      }),
      deps: [Router]
    },
    // Repositories
    {
      provide: ICaretrackRepository,
      useValue: new CaretrackRepositoryInMemory()
    },

    // Usecases
    {
      provide: AddCaretrackUseCase,
      useFactory: (repo: CaretrackRepository) => new AddCaretrackUseCase(repo),
      deps: [ICaretrackRepository]
    },
    {
      provide: GetCaretracksUseCase,
      useFactory: (repo: CaretrackRepository) => new GetCaretracksUseCase(repo),
      deps: [ICaretrackRepository]
    },
    {
      provide: GetCaretrackUseCase,
      useFactory: (repo: CaretrackRepository) => new GetCaretrackUseCase(repo),
      deps: [ICaretrackRepository]
    },
    {
      provide: CancelCaretrackUseCase,
      useFactory: (repo: CaretrackRepository) => new CancelCaretrackUseCase(repo),
      deps: [ICaretrackRepository]
    },
    // Presneters
    {
      provide: CancelCaretrackPresenter,
      useFactory: (cancelCaretrackUseCase: CancelCaretrackUseCase, navigate: Navigate) => new CancelCaretrackPresenter(cancelCaretrackUseCase, navigate),
      deps: [CancelCaretrackUseCase, INavigation]
    },
    {
      provide: AddCaretrackPresenter,
      useFactory: (addCaretrackUseCase: AddCaretrackUseCase, navigate: Navigate) => new AddCaretrackPresenter(addCaretrackUseCase, navigate),
      deps: [AddCaretrackUseCase, INavigation]
    },
    {
      provide: ListCaretracksPresenter,
      useFactory: (getCaretracksUseCase: GetCaretracksUseCase) => new ListCaretracksPresenter(getCaretracksUseCase),
      deps: [GetCaretracksUseCase]
    },
    {
      provide: GetCaretrackPresenter,
      useFactory: (getCaretracksUseCase: GetCaretrackUseCase) => new GetCaretrackPresenter(getCaretracksUseCase),
      deps: [GetCaretrackUseCase]
    }
  ]
})
export class CoreModule {
}
