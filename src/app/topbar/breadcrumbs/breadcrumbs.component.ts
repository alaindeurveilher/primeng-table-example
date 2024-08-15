import { Component, computed, Signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [BreadcrumbModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css'
})
export class BreadcrumbsComponent {
  protected items: Signal<MenuItem[]> = computed(() => [
    { label: 'Home', routerLink: '/' },
  ]);
  protected home: Signal<MenuItem|undefined> = computed(() => ({ icon: 'pi pi-home', routerLink: '/' }));
}
