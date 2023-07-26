import {createStore, select, Store, withProps} from "@ngneat/elf";
import {Observable} from "rxjs";

export class PresenterStore<K> {

  protected store: Store<{
    name: string,
    state: K
    config: K
  }>;

  constructor(private name: string, private initialState: K) {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.store = createStore(
      {name},
      withProps<K>(initialState)
    );
  }

  protected update(newState: Partial<K>) {
    this.store.update((state) => ({...state, ...newState}));
  }


  public vm(): Observable<K> {
    return this.store.pipe(select((state) => state));
  }

  public select<T>(selector: keyof K): Observable<T> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.store.pipe(select((state) => state[selector]));
  }


}
