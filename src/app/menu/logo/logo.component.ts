import { Component, inject } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {
  protected menuService: MenuService = inject(MenuService);
}
