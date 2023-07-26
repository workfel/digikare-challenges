import {Component, Input, ViewEncapsulation} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  standalone: true,
  selector: 'dgk-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgClass
  ]
})
export class FormFieldComponent {
  @Input() position: 'inline' | 'default' = 'default';
}
