import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Caretrack} from "@digikare-challenges/core/caretracks";
import {ButtonComponent, CardComponent, ThemeColors} from "@digikare-challenges/ui/design-system";

@Component({
  selector: 'digikare-challenges-caretrack-card',
  standalone: true,
  imports: [CommonModule, CardComponent, ButtonComponent],
  templateUrl: './caretrack-card.component.html',
  styleUrls: ['./caretrack-card.component.scss'],
})
export class CaretrackCardComponent {
  @Input({required: true}) caretrack!: Caretrack;
  @Output() cancel = new EventEmitter<void>();
  protected readonly ThemeColors = ThemeColors;

  cancelIt() {
    this.cancel.emit();
  }


}
