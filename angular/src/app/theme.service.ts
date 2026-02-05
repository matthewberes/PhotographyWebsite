import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface AppTheme {
  name: ThemeMode;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private appTheme = signal<ThemeMode>('system');
  public currentTheme: BehaviorSubject<string> = new BehaviorSubject<string>('system');
  private systemIsDark = signal<boolean>(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  private themes: AppTheme[] = [
    { name: 'light', icon: 'light_mode' },
    { name: 'dark', icon: 'dark_mode' },
    { name: 'system', icon: 'desktop_windows' },
  ];

  resolvedTheme = computed(() => {
    const mode = this.appTheme();
    if (mode === 'system') {
      return this.systemIsDark() ? 'dark' : 'light';
    }
    return mode;
  });

  selectedTheme = computed(() =>
    this.themes.find((t) => t.name === this.appTheme())
  );

  getThemes() {
    return this.themes;
  }

  getTheme() {
    return this.appTheme();
  }

  setTheme(theme: 'light' | 'dark' | 'system') {
    this.appTheme.set(theme);
  }

  constructor() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      this.systemIsDark.set(e.matches);
      if (this.systemIsDark() == true) {
        this.currentTheme.next('dark');
      } else {
        this.currentTheme.next('light');
      }
    });

    effect(() => {
      const appTheme = this.appTheme();
      const colorScheme = appTheme === 'system' ? 'light dark' : appTheme;
      document.body.style.setProperty('color-scheme', colorScheme);
      this.currentTheme.next(appTheme);
    });
  }
}
