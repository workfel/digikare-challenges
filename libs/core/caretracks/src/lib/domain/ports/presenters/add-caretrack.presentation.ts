import {Caretrack} from "../../entities/caretrack";

export enum AddCaretrackFields {
  email = 'email',
  interventionDate = 'interventionDate',
  interventionId = 'interventionId'
}

export type AddCaretrackErrorMessages =
  'email_required'
  | 'intervention_date_required'
  | 'intervention_id_required'
  | 'intervention_date_greather_than_today';

export type AddCaretrackErrors = Map<AddCaretrackFields, AddCaretrackErrorMessages>

export interface AddCaretrackPresentation {
  notifyAddCaretrackInvalid(errors: AddCaretrackErrors): void
  notifyAdded(caretrack: Caretrack): void;
}
