import { Component } from '@angular/core';
import { ModeMenuComponent } from '../mode-menu/mode-menu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, ModeMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuOpen = false;

  onTitleClick() {
    window.location.href = '/';
  }
}
