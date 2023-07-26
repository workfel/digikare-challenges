import {Sex} from "./sex";

export interface Caretrack {
  id: string;
  lastName: string;
  firstName: string;
  interventionId: string;
  interventionDate: string;
  email: string;
  sex: Sex;
}
