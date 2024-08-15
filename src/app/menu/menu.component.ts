import { Component, computed, inject, Signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { MenuService } from '../services/menu.service';
import { LogoComponent } from "./logo/logo.component";
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuModule, ToggleComponent, LogoComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  private menuService: MenuService = inject(MenuService);
  
  protected items: Signal<MenuItem[]> = computed<MenuItem[]>(() => [
    { separator: true },
    { label: this.menuService.iconOnly() ? undefined : 'Menu1', icon: 'pi pi-plus', routerLink: '/' },
    { label: this.menuService.iconOnly() ? undefined : 'Menu2', icon: 'pi pi-info-circle', routerLink: '/' },
    { label: this.menuService.iconOnly() ? undefined : 'Menu3', icon: 'pi pi-search', routerLink: '/' },
    { separator: true },
  ]);
}
