import { Component } from '@angular/core';

/* Import Card */
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
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';

/* Imports form email */
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

/* Imports botton */
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

/* Import service */
import { EnderecoService } from './../services/endereco.service';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-formulario',
  standalone: true,
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-br' },
    provideMomentDateAdapter(MY_FORMATS),
  ],
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
  isDisabled: boolean = true;

  /* Variáveis do form control */
  fullName = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/),
  ]);

  cpf = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d{3}.\d{3}.\d{3}-\d{2}$/),
  ]);

  date = new FormControl('', [Validators.required]);

  email = new FormControl('', [Validators.required, Validators.email]);

  cel = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\(\d{2}\)\d{5}-\d{4}$/),
  ]);

  cep = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d{5}-\d{3}$/),
  ]);

  estado = new FormControl({ value: '', disabled: this.isDisabled }, [
    Validators.required,
  ]);

  cidade = new FormControl({ value: '', disabled: this.isDisabled }, [
    Validators.required,
  ]);

  bairro = new FormControl({ value: '', disabled: this.isDisabled }, [
    Validators.required,
  ]);

  rua = new FormControl({ value: '', disabled: this.isDisabled }, [
    Validators.required,
  ]);

  numero = new FormControl({ value: '', disabled: this.isDisabled }, [
    Validators.required,
  ]);

  /* Variáveis da mensagem de erro */
  errorMessageFullName = '';
  errorMessageCpf = '';
  errorMessageDate = '';
  errorMessageEmail = '';
  errorMessageCel = '';
  errorMessageCep = '';
  errorMessageEstado = '';
  errorMessageCidade = '';
  errorMessageBairro = '';
  errorMessageRua = '';
  errorMessageNumero = '';

  constructor(private enderecoService: EnderecoService) {
    merge(this.fullName.statusChanges, this.fullName.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageFullName());

    merge(this.cpf.statusChanges, this.cpf.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageCpf());

    merge(this.date.statusChanges, this.date.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageDate());

    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageEmail());

    merge(this.cel.statusChanges, this.cel.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageCel());

    merge(this.cep.statusChanges, this.cep.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageCep());

    merge(this.estado.statusChanges, this.estado.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageEstado());

    merge(this.cidade.statusChanges, this.cidade.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageCidade());

    merge(this.bairro.statusChanges, this.bairro.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageBairro());

    merge(this.rua.statusChanges, this.rua.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageRua());

    merge(this.numero.statusChanges, this.numero.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageNumero());
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

  updateErrorMessageCpf() {
    if (this.cpf.hasError('required')) {
      this.errorMessageCpf = 'Campo obrigatório';
    } else if (this.cpf.hasError('pattern')) {
      this.errorMessageCpf = 'Cpf inválido';
    } else {
      this.errorMessageCpf = '';
    }
  }

  updateErrorMessageDate() {
    if (this.date.hasError('required')) {
      this.errorMessageDate = 'Campo obrigatório';
    } else {
      this.errorMessageDate = '';
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

  updateErrorMessageCel() {
    if (this.cel.hasError('required')) {
      this.errorMessageCel = 'Campo obrigátorio';
    } else if (this.cel.hasError('pattern')) {
      this.errorMessageCel = 'Celular inválido';
    } else {
      this.errorMessageCel = '';
    }
  }

  updateErrorMessageCep() {
    if (this.cep.hasError('required')) {
      this.errorMessageCep = 'Campo obrigátorio';
    } else if (this.cep.hasError('pattern')) {
      this.errorMessageCep = 'CEP inválido';
    } else {
      this.errorMessageCep = '';
    }
  }

  updateErrorMessageEstado() {
    if (this.estado.hasError('required')) {
      this.errorMessageEstado = 'Campo obrigátorio';
    } else {
      this.errorMessageEstado = '';
    }
  }

  updateErrorMessageCidade() {
    if (this.estado.hasError('required')) {
      this.errorMessageCidade = 'Campo obrigátorio';
    } else {
      this.errorMessageCidade = '';
    }
  }

  updateErrorMessageBairro() {
    if (this.bairro.hasError('required')) {
      this.errorMessageBairro = 'Campo obrigátorio';
    } else {
      this.errorMessageBairro = '';
    }
  }

  updateErrorMessageRua() {
    if (this.rua.hasError('required')) {
      this.errorMessageRua = 'Campo obrigátorio';
    } else {
      this.errorMessageRua = '';
    }
  }

  updateErrorMessageNumero() {
    if (this.numero.hasError('required')) {
      this.errorMessageNumero = 'Campo obrigátorio';
    } else {
      this.errorMessageNumero = '';
    }
  }

  buscarEnderecoPorCEP() {
    const cepInput = this.cep.value;

    this.enderecoService
      .getEndereco(cepInput)
      .then((endereco) => {
        this.estado.setValue(endereco.uf);
        this.estado.enable();
        this.cidade.setValue(endereco.cidade);
        this.cidade.enable();
        this.bairro.setValue(endereco.bairro);
        this.bairro.enable();
        this.rua.setValue(endereco.logradouro);
        this.rua.enable();
        this.numero.enable();
      })
      .catch((error) => {
        console.error('Erro ao buscar endereço:', error);
      });
  }
}
