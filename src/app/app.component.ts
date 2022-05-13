import { Component } from '@angular/core';
import { AuthService } from './components/authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private authService: AuthService) { }

  goToHome(): boolean {
    return this.authService.isAuthenticated();
  }
}
