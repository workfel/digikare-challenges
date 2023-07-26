import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from "../../shell/layout/layout.component";
import {toSignal} from "@angular/core/rxjs-interop";
import {TranslateModule} from "@ngx-translate/core";
import {CaretrackListItemComponent} from "./components/caretrack-list-item/caretrack-list-item.component";
import {ListCaretracksPresenter} from "@digikare-challenges/core/caretracks";
import {Router} from "@angular/router";

@Component({
  selector: 'digikare-challenges-caretracks',
  standalone: true,
  imports: [CommonModule, LayoutComponent, TranslateModule, CaretrackListItemComponent],
  templateUrl: './caretracks.component.html',
  styleUrls: ['./caretracks.component.scss'],
})
export class CaretracksComponent implements OnInit {


  caretracks = toSignal(this.presenter.caretracks$());

  constructor(private presenter: ListCaretracksPresenter,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    this.presenter.fetchCaretracks();
  }

  selectedCaretrack(id: string) {
    this.router.navigate(['/caretracks', id])
  }
}
