import { Component, computed, inject } from '@angular/core';
import { SharedService } from '../shared.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  sharedService = inject(SharedService);
  private authService = inject(AuthService);

  isUser = computed(() => this.authService.activePermission() === 'user');
}
