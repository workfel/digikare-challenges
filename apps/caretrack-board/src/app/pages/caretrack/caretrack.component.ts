import {Component, OnInit, Signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {CaretrackListItemComponent} from "../caretracks/components/caretrack-list-item/caretrack-list-item.component";
import {LayoutComponent} from "../../shell/layout/layout.component";
import {TranslateModule} from "@ngx-translate/core";
import {CaretrackCardComponent} from "./components/caretrack-card/caretrack-card.component";
import {toSignal} from "@angular/core/rxjs-interop";
import {
  CancelCaretrackPresenter,
  CancelErrorType,
  Caretrack,
  GetCaretrackPresenter
} from "@digikare-challenges/core/caretracks";
import {filter} from "rxjs";

@Component({
  selector: 'digikare-challenges-caretrack',
  standalone: true,
  imports: [CommonModule, CaretrackListItemComponent, LayoutComponent, TranslateModule, CaretrackCardComponent],
  templateUrl: './caretrack.component.html',
  styleUrls: ['./caretrack.component.scss'],
})
export class CaretrackComponent implements OnInit {
  caretrack: Signal<Caretrack | undefined> = toSignal(this.getCaretrackPresenter.select<Caretrack>('caretrack'));

  constructor(
    private readonly route: ActivatedRoute,
    private readonly getCaretrackPresenter: GetCaretrackPresenter,
    private readonly cancelCaretrackPresenter: CancelCaretrackPresenter) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getCaretrackPresenter.fetchCaretrack(id)
    }

    this.cancelCaretrackPresenter.select<CancelErrorType>('error')
      .pipe(filter(v => v === 'intervention_date_overdue'))
      .subscribe((res) => {
        alert('Impossible de supprimer le suivi car la date d\'intervention est passée')
      })
  }

  onCancelCaretrack() {
    const caretrack = this.caretrack();
    if (caretrack) {
      this.cancelCaretrackPresenter.cancel(caretrack)
    }

  }
}
