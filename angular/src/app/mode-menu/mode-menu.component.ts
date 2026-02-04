import { Component, inject } from '@angular/core';
import { ThemeService } from '../theme.service';
import { TitleCasePipe } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-mode-menu',
  imports: [MatToolbar,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    TitleCasePipe],
  templateUrl: './mode-menu.component.html',
  styleUrl: './mode-menu.component.css',
})
export class ModeMenuComponent {
  protected themeService = inject(ThemeService);
}
