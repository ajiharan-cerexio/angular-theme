import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  buttonLabel: string = 'Dark Mode';
  constructor(private themeService: ThemeService) {}

  getButtonLabel(): string {
    if (this.themeService.theme === 'light-theme') {
      return 'Light Mode';
    }
    return 'Dark Mode';
  }
  switchTheme(): void {
    this.themeService.switchTheme();
  }
}
