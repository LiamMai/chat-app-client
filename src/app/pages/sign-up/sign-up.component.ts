import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { HelperService } from '../../core/services/helper.service';
import { AuthService } from '../../core/services/auth/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { interval, lastValueFrom, Subscription } from 'rxjs';
import { signUpForm, validationMessages } from './sign-up.model';
import { FormService } from '../../core/services/form.service';
import { Router } from '@angular/router';
import ROUTES from '../../shared/constants/routes';
import { injectMutation } from '@tanstack/angular-query-experimental';

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
  selector: 'app-sign-up',
  imports: importsModule,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  constructor(
    private formService: FormService,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) { }

  showImageItem: number = 1;
  passwordVisible = false;
  confirmPasswordVisible = false;

  form: FormGroup = signUpForm();

  signUpMutation = injectMutation(() => ({
    mutationFn: (body: BodySignInAndSignUp) => lastValueFrom(this.authService.signUp(body))
  }))

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
      await this.signUpMutation.mutateAsync(body)
      this.router.navigateByUrl(`${ROUTES.HOME.INDEX}/${ROUTES.HOME.MESSAGE}`)

    } catch (error: any) {
      this.toastService.createToast({ type: 'error', message: error.message })

    }

  }

  handleNavigateToSignUp() {
    this.router.navigateByUrl(ROUTES.LOGIN);
  }

}
