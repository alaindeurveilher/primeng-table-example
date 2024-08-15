import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { MenuSize } from '../models/menu-size';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuSizeState: WritableSignal<MenuSize> = signal<MenuSize>('base');
  readonly menuSize: Signal<MenuSize> = computed(() => this.menuSizeState());
  readonly iconOnly: Signal<boolean> = computed(() => this.menuSize() === 'sm');
  
  toggleMenu(): void {
    this.menuSizeState.update((previous: MenuSize) => previous === 'base' ? 'sm' : 'base');
  }
}
