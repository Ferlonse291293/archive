import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {AuthContextService} from '../configs/auth-context.service';
import {SectionsKeys} from '../../core/model/sections-keys.namespace';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {AppPasswordFieldComponent} from '../../shared/components/form/password-field/password-field.component';
import { MatInputModule, } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {TextFieldComponent} from '../../shared/components/form/text-field/text-field.component';
import {MatButtonModule} from '@angular/material/button';

import {ReqLogin} from '../../core/data/endpoints/auth/auth-api.interface';
import {RouterService} from '../../core/services/router.service';
import {NavLinks} from '../../core/router/navigation';
import {DataFacadeMap} from '../../core/facades/store-facade.registry';
import {LogoComponent} from '../../shared/components/logo/logo/logo.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AppPasswordFieldComponent,
    MatFormFieldModule,
    MatInputModule,
    TextFieldComponent,
    MatButtonModule,
    LogoComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  private fb = inject(FormBuilder)
  private authContext = inject(AuthContextService);
  private loginSection = this.authContext.getSection(SectionsKeys.Auth.login)!
  private routerService = inject(RouterService)
  private data : DataFacadeMap = this.loginSection.data
  isLoginDisabled: boolean = false


  public form = this.fb.group({
    email: this.fb.nonNullable.control('maria.ivanova@example.com' , [Validators.required, Validators.minLength(8), Validators.email]),
    password: this.fb.nonNullable.control('Qwerty#2026' , [Validators.required]),
  });


  login(){
    this.isLoginDisabled = true
    const req: ReqLogin = {email: this.form.controls.email.value, password: this.form.controls.password.value}
    this.data.AUTH!.login(req)
      .then(res => {
          this.isLoginDisabled = false
          Promise.all([ this.data.AUTH!.getProfile(), this.data.OPTIONS!.getOptions()] ).then(() => {
          this.routerService.redirectTo(NavLinks.HOME)
          })
      }).catch(err => {
      this.isLoginDisabled = false
      console.error('Login failed', err)
    })
  }
}
