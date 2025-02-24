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
import { ApiStatusService } from '../../core/services/api-status.service';
import { ToastService } from '../../core/services/toast.service';
import { interval, Subscription } from 'rxjs';
import { signUpForm, validationMessages } from './sign-up.model';
import { FormService } from '../../core/services/form.service';

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
    private apiStatus: ApiStatusService,
    private toastService: ToastService
  ) {}

   isLoading$ = this.apiStatus.isLoading$;
  
    showImageItem: number = 1;
    passwordVisible = false;
    confirmPasswordVisible = false;
  
    form: FormGroup = signUpForm()
  
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
  
      const sub = this.authService.signUp(body).subscribe({
        next: res => {
        },
        error: error => {
          this.toastService.createToast({ type: 'error', message: error.message })
        }
      })
  
      this.subscriptions.push(sub);
  
    }
  
}
