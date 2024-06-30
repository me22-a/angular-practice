import { AuthService } from './auth.service';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  enteredEmail = signal('');
  enteredPassword = signal('');
  @Output() close = new EventEmitter<void>();

  isLogin = false;

  private authService = inject(AuthService);

  onLogin() {
    this.isLogin = true;
  }

  onCancel() {
    this.close.emit();
  }

  onSummit() {
    this.authService.authenticate(this.enteredEmail(), this.enteredPassword());
    this.close.emit();
  }
}
