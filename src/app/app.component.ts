import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AuthComponent } from './components/auth/auth.component';
import { SharedService } from './components/shared.service';
import { AuthService } from './components/auth/auth.service';
import { AuthDirective } from './components/auth/auth.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, GalleryComponent, AuthComponent, AuthDirective],
})
export class AppComponent {
  title = 'pinterest-clone';
  sharedService = inject(SharedService);
  private authService = inject(AuthService);

  isClickedLogin = false;

  onStartLogin() {
    this.isClickedLogin = true;
  }

  onCloseLogin() {
    this.isClickedLogin = false;
  }

  isUser = computed(() => this.authService.activePermission() === 'user');

  constructor() {
    this.sharedService.onLoginButtonClick.subscribe(() => {
      this.onStartLogin();
    });
  }
}
