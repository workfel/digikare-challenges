import {Caretrack} from "./caretrack";
import {Builder} from "@digikare-challenges/core-domain";
import {Sex} from "./sex";
import {randEmail, randFirstName, randLastName, randSoonDate, randUuid} from "@ngneat/falso";

export class CaretrackBuilder extends Builder<Caretrack> {
  getDefault(): Caretrack {
    return {
      id: randUuid(),
      email: randEmail(),
      firstName: randFirstName(),
      interventionDate: randSoonDate().toString(),
      interventionId: "pth",
      lastName: randLastName(),
      sex: 'f'
    };
  }


  withEmail(email: string) {
    this._item.email = email;
    return this;
  }

  withInterventionDate(interventionDate: string) {
    this._item.interventionDate = interventionDate;
    return this;
  }

  withInterventionId(interventionId: string) {
    this._item.interventionId = interventionId;
    return this;
  }

  withFirstName(firstName: string) {
    this._item.firstName = firstName;
    return this;
  }

  withLastName(lastName: string) {
    this._item.lastName = lastName;
    return this;

  }

  withSex(sex: Sex) {
    this._item.sex = sex;
    return this;
  }
}
