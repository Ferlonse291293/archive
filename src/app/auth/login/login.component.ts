import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {AuthContextService} from '../configs/auth-context.service';
import {SectionsKeys} from '../../core/model/sections-keys.namespace';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {AppPasswordFieldComponent} from '../../shared/components/form/password-field/password-field.component';
import { MatInputModule, } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {TextFieldComponent} from '../../shared/components/form/text-field/text-field.component';
import {MatButtonModule} from '@angular/material/button';
import {IAuthStateFacade} from '../../core/facades/data/auth-data-facade';
import {ReqLogin} from '../../core/data/endpoints/auth-api.interface';
import {RouterService} from '../../core/services/router.service';
import {NavLinks} from '../../core/router/navigation';

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
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  private fb = inject(FormBuilder)
  private authContext = inject(AuthContextService);
  private loginSection = this.authContext.getSection(SectionsKeys.Auth.login)
  private routerService = inject(RouterService)
  private data: IAuthStateFacade = this.loginSection?.data['AUTH']
  isLoginDisabled: boolean = false


  public form = this.fb.group({
    email: this.fb.nonNullable.control('' , [Validators.required, Validators.minLength(8), Validators.email]),
    password: this.fb.nonNullable.control('' , [Validators.required]),
  });


  login(){
    this.isLoginDisabled = true
    const req: ReqLogin = {email: this.form.controls.email.value, password: this.form.controls.password.value}
    this.data.login(req)
      .then(res => {
        setTimeout(() => {
          this.isLoginDisabled = false
          this.data.getProfile().then(res => {
            this.routerService.redirectTo(NavLinks.HOME)
          })
        }, 50)
    })

  }


}
