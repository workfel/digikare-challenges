import {Caretrack, CaretrackBuilder, CaretrackRepository} from "../../domain";

export class CaretrackRepositoryInMemory implements CaretrackRepository {
  private caretracks: Caretrack[] = [];

  constructor() {
    console.log('ctor', CaretrackRepositoryInMemory.name);
    this.caretracks = [
      new CaretrackBuilder().build(),
      new CaretrackBuilder().withInterventionDate(new Date('2023-07-20').toISOString()).build(),
      new CaretrackBuilder().build(),
    ]
  }

  addCaretrack(caretrack: Caretrack): Promise<void> {
    this.caretracks.push(caretrack);
    return Promise.resolve();
  }

  getMyCaretracks(): Promise<Caretrack[]> {
    return Promise.resolve(this.caretracks);
  }

  getCaretrackById(id: string): Promise<Caretrack | undefined> {
    return Promise.resolve(this.caretracks.find(c => c.id === id));
  }

  cancelCaretrack(id: string): Promise<boolean> {
    this.caretracks = this.caretracks.filter(c => c.id !== id);
    return Promise.resolve(true);
  }

}
