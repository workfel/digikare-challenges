import {Component, computed, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Caretrack} from "@digikare-challenges/core/caretracks";
import {TranslateModule} from "@ngx-translate/core";
import {ButtonComponent, ThemeColors} from "@digikare-challenges/ui/design-system";

@Component({
  selector: 'digikare-challenges-caretrack-list-item',
  standalone: true,
  imports: [CommonModule, TranslateModule, ButtonComponent],
  templateUrl: './caretrack-list-item.component.html',
  styleUrls: ['./caretrack-list-item.component.scss'],
})
export class CaretrackListItemComponent {
  @Input({required: true}) caretrack!: Caretrack;
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  displayName = computed(() => {
    return this.caretrack.firstName + ' ' + this.caretrack.lastName
  });

  date = computed(() => {
    return new Date(this.caretrack.interventionDate).toDateString()
  })
  protected readonly ThemeColors = ThemeColors;

  accessCaretrack() {
    this.selected.emit(this.caretrack.id);
  }
}
