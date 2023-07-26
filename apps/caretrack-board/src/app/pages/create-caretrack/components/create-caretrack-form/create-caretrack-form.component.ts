import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent, CardComponent, FormFieldComponent} from "@digikare-challenges/ui/design-system";
import {TranslateModule} from "@ngx-translate/core";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AddCaretrackPresenterViewModelErrors, Caretrack} from "@digikare-challenges/core/caretracks";
import {filter} from "rxjs";


interface CaretrackFormGroup {
  lastName: FormControl<string | null>;
  firstName: FormControl<string | null>;
  interventionId: FormControl<string | null>;
  interventionDate: FormControl<string | null>;
  email: FormControl<string | null>;
  sex: FormControl<string | null>;
}

@Component({
  selector: 'digikare-challenges-create-caretrack-form',
  standalone: true,
  imports: [CommonModule, CardComponent, FormFieldComponent, TranslateModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './create-caretrack-form.component.html',
  styleUrls: ['./create-caretrack-form.component.scss'],
})
export class CreateCaretrackFormComponent {
  @Input({required: true}) interventionIds: string[] = [];
  @Input() errors: AddCaretrackPresenterViewModelErrors | undefined;
  @Output() create: EventEmitter<Omit<Caretrack, 'id'>> = new EventEmitter<Omit<Caretrack, 'id'>>;


  formGroup: FormGroup<CaretrackFormGroup>;

  constructor(private readonly _fg: FormBuilder) {


    this.formGroup = this._fg.group({
      firstName: ['ads', Validators.required],
      lastName: ['da', Validators.required],
      interventionId: ['ptg', Validators.required],
      interventionDate: ['', Validators.required],
      email: ['ddd@oho.com', Validators.required],
      sex: ['m', Validators.required]
    });

    this.formGroup.valueChanges.pipe(
      filter(_ => this.formGroup.valid))
      .subscribe(() => {
        this.errors = undefined
      })
  }

  onValid() {
    this.create.emit(this.getFromValues());
  }

  private getFromValues(): Omit<Caretrack, 'id'> {
    return {
      firstName: this.formGroup.get('firstName')?.value || '',
      lastName: this.formGroup.get('lastName')?.value || '',
      interventionId: this.formGroup.get('interventionId')?.value || '',
      interventionDate: this.formGroup.get('interventionDate')?.value || '',
      email: this.formGroup.get('email')?.value || '',
      sex: this.formGroup.get('sex')?.value === 'm' ? 'm' : 'f' || 'm',
    }
  }
}
