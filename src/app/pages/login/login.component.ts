import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzImageModule } from 'ng-zorro-antd/image';
import { interval, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Form, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { loginByEmail, validationMessages } from './login.model';
import { HelperService } from '../../core/services/helper.service';
import { AuthService } from '../../core/services/auth/auth.service';
import { ApiStatusService } from '../../core/services/api-status.service';
import { ToastService } from '../../core/services/toast.service';
import { FormService } from '../../core/services/form.service';
import { Route, Router } from '@angular/router';
import ROUTES from '../../constants/routes';

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
    private apiStatus: ApiStatusService,
    private toastService: ToastService,
    private router: Router
  ) {}
  
  isLoading$ = this.apiStatus.isLoading$;

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

  onSubmit() {
    const email = this.form.get("email")?.value;
    const password = this.form.get("password")?.value;
    
    const body: BodySignInAndSignUp = {
      email, 
      password
    }

    const sub = this.authService.signIn(body).subscribe({
      next: res => {
        this.router.navigateByUrl(ROUTES.HOME.MESSAGE)
      },
      error: error => {
        this.toastService.createToast({ type: 'error', message: error.message })
      }
    })

    this.subscriptions.push(sub);

  }

  handleNavigateToSignUp() {
    this.router.navigateByUrl(ROUTES.SIGN_UP);
  }
}
