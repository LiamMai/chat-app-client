import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzImageModule } from 'ng-zorro-antd/image';
import { interval, lastValueFrom, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Form, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { loginByEmail, validationMessages } from './login.model';
import { AuthService } from '../../core/services/auth/auth.service';
import { ToastService } from '../../core/services/toast/toast.service';
import { Route, Router } from '@angular/router';
import ROUTES from '../../shared/constants/routes';
import { injectMutation } from '@tanstack/angular-query-experimental';
import { FormService } from '../../core/services/form/form.service';

const importsModule = [
  CommonModule,
  NzInputModule,
  NzImageModule,
  NzIconModule,
  FormsModule,
  NzButtonModule,
  NzDividerModule,
  ReactiveFormsModule
]

@Component({
  selector: 'app-login',
  imports: importsModule,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [],
  standalone: true
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    private formService: FormService,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router,
  ) { }

  signInMutation = injectMutation(() => ({
    mutationFn: (body: BodySignInAndSignUp) => lastValueFrom(this.authService.signIn(body))
  }))
  showImageItem: number = 1;
  passwordVisible = false;
  password: string = "";

  form: FormGroup = loginByEmail()

  private subscriptions: Subscription[] = [];

  ngOnInit(): void {
    const imagesInterval = interval(5000);
    const sub = imagesInterval.subscribe({
      next: () => {
        if (this.showImageItem === 4) {
          this.showImageItem = 1;
        } else {
          this.showImageItem++;
        }
      }
    })

    this.subscriptions.push(sub)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }

  getFormErrorMessage(controlName: string) {
    return this.formService.getFormErrorMessage({ form: this.form, controlName, validationMessages: validationMessages })
  }

  async onSubmit() {
    const email = this.form.get("email")?.value;
    const password = this.form.get("password")?.value;

    const body: BodySignInAndSignUp = {
      email,
      password
    }

    try {
      await this.signInMutation.mutateAsync(body);
      this.router.navigateByUrl(`${ROUTES.HOME.INDEX}/${ROUTES.HOME.MESSAGE}`)

    } catch (error: any) {
      this.toastService.createToast({ type: 'error', message: error.message })
    }


  }

  handleNavigateToSignUp() {
    this.router.navigateByUrl(ROUTES.SIGN_UP);
  }
}
