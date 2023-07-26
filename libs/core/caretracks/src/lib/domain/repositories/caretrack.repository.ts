import {Caretrack} from "../entities/caretrack";

export interface CaretrackRepository {
  addCaretrack(caretrack: Caretrack): Promise<void>

  getMyCaretracks(): Promise<Caretrack[]>;

  getCaretrackById(id: string): Promise<Caretrack | undefined>;

  cancelCaretrack(id: string): Promise<boolean>
}
