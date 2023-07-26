import {Component, Input} from '@angular/core';
import {ThemeColors} from "../../theme";

@Component({
  standalone: true,
  selector: 'dgk-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() theme: ThemeColors = ThemeColors.primary;
  @Input() disabled: boolean = false;
}
