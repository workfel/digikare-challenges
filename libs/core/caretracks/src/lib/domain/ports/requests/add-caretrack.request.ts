import {Sex} from "../../entities/sex";

export class AddCaretrackRequest {
  constructor(public readonly email: string, public readonly interventionDate: string, public readonly interventionId: string,
              public readonly firstName: string, public readonly lastName: string, public readonly sex: Sex) {
  }
}
