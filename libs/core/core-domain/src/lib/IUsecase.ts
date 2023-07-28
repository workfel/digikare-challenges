export interface IUsecase<Request, Presenter> {

  execute(request: Request, presenter: Presenter): Promise<void> | void
}
