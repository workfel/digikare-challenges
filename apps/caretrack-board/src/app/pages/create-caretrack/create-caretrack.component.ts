import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateCaretrackFormComponent} from "./components/create-caretrack-form/create-caretrack-form.component";
import {AddCaretrackPresenter, Caretrack} from "@digikare-challenges/core/caretracks";
import {toSignal} from "@angular/core/rxjs-interop";
import {CaretrackListItemComponent} from "../caretracks/components/caretrack-list-item/caretrack-list-item.component";
import {LayoutComponent} from "../../shell/layout/layout.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'digikare-challenges-create-caretrack',
  standalone: true,
  imports: [CommonModule, CreateCaretrackFormComponent, CaretrackListItemComponent, LayoutComponent, TranslateModule],
  templateUrl: './create-caretrack.component.html',
  styleUrls: ['./create-caretrack.component.scss'],
})
export class CreateCaretrackComponent {

  interventionIds = toSignal(this.presenter.interventionIds$());
  errors = toSignal(this.presenter.errors$());

  constructor(private readonly presenter: AddCaretrackPresenter) {

  }

  onCreate($event: Omit<Caretrack, "id">) {
    this.presenter.create($event);
  }
}
