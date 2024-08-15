import { Component, computed, inject, Signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  protected menuService: MenuService = inject(MenuService);
  private readonly direction: Signal<'left' | 'right'> = computed(() => this.menuService.menuSize() === 'sm' ? 'right' : 'left');
  protected readonly icon: Signal<string> = computed(() => `pi pi-chevron-${this.direction()}`);
  protected readonly ariaLabel: Signal<string> = computed(() => this.menuService.menuSize() === 'sm' ? 'Expand button' : 'Collapse button');
}
