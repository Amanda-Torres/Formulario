import { Component } from '@angular/core';

/* Imports Card */
import { MatCardModule } from '@angular/material/card';

/* Imports Form */
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

/* Imports data form */
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

/* Inport form email */
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

/* Imports botton */
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-formulario',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  /* Variáveis do form control */
  fullName = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/),
  ]);

  cpf = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d{3}.\d{3}.\d{3}-\d{2}$/),
  ]);

  email = new FormControl('', [Validators.required, Validators.email]);

  /* Variáveis da mensagem de erro */
  errorMessageFullName = '';
  errorMessageCpf = '';
  errorMessageEmail = '';

  constructor() {
    merge(this.fullName.statusChanges, this.fullName.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageFullName());

    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageEmail());
  }

  /* Funções de mensagem de erro */

  updateErrorMessageFullName() {
    if (this.fullName.hasError('required')) {
      this.errorMessageFullName = 'Campo obrigatório';
    } else if (this.fullName.hasError('pattern')) {
      this.errorMessageFullName = 'Nome inválido';
    } else {
      this.errorMessageFullName = '';
    }
  }

  updateErrorMessageEmail() {
    if (this.email.hasError('required')) {
      this.errorMessageEmail = 'Campo obrigátorio';
    } else if (this.email.hasError('email')) {
      this.errorMessageEmail = 'E-mail inválido';
    } else {
      this.errorMessageEmail = '';
    }
  }
}
