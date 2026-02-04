import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './theme.service';
import { ModeMenuComponent } from './mode-menu/mode-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ModeMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
  constructor(public themeService: ThemeService) { }

}
