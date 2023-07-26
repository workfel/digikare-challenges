import {SignalStore} from "./signal-store";

export abstract class Controller<T extends Record<string, unknown>> {
  protected constructor(private abstractPresenter: SignalStore<T>) {
  }

  // subscribeVM(subscriber: Subscriber<T>) {
  //     this.abstractPresenter.subscribeVM(subscriber)
  // }

}
