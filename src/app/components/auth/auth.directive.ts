import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });
  private authService = inject(AuthService);
  private templaeRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        this.viewContainerRef.createEmbeddedView(this.templaeRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
}
