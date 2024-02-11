import { Component, OnInit } from '@angular/core';
import { productData } from './product';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
})
export class CustomTableComponent implements OnInit {
  products = productData;
  buttonLabel: string = 'Dark Mode';
  constructor(private themeService: ThemeService) {}

  ngOnInit() {}

  getButtonLabel(): string {
    if (this.themeService.theme === 'light-theme') {
      return 'Light Mode';
    }
    return 'Dark Mode';
  }

  onThemeChange(): void {
    this.themeService.switchTheme();
  }
}
