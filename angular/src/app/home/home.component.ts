import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private themeService: ThemeService, private router: Router) { }

  imageSource: string = 'light-banner.png';

  private subscriptions = new Subscription();

  ngOnInit() {
    this.subscriptions.add(
      this.themeService.currentTheme.subscribe((theme) => {
        this.updateImageSource(theme);
      })
    );
  }

  updateImageSource(theme: string) {
    if (this.themeService.currentTheme.value == 'light') {
      this.imageSource = 'light-banner.png';
    } else if (this.themeService.currentTheme.value == 'dark') {
      this.imageSource = 'dark-banner.png';
    } else if (this.themeService.currentTheme.value == 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.imageSource = prefersDark ? 'dark-banner.png' : 'light-banner.png';
    }
  }

  viewPortfolio() {
    this.router.navigate(['/gallery']);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
