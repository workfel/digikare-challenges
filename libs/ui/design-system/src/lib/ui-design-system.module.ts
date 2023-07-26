import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './atoms/button/button.component';
import { FormFieldComponent } from './atoms/form-field/form-field.component';
import { CardComponent } from './atoms/card/card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, FormFieldComponent, CardComponent],
})
export class UiDesignSystemModule {}
