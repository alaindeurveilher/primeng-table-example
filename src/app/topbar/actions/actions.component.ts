import { Component, computed, inject, Signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.css'
})
export class ActionsComponent {
  private dataService: DataService = inject(DataService);
  protected splitZoomIcon: Signal<string> = computed(() =>
    this.dataService.isSplitExtended()
      ? 'pi pi-arrow-down-left-and-arrow-up-right-to-center -rotate-45'
      : 'pi pi-arrows-v'
  );
  protected tableSizeIcon: Signal<string> = computed(() =>
    this.dataService.nbOfBgs() <= 2
      ? 'pi pi-align-justify'
      : 'pi pi-equals'
  );

  toggleSplitZoom(): void {
    this.dataService.isSplitExtended.update(isExtended => !isExtended);
  }

  toggleTableSize(): void {
    this.dataService.nbOfBgs.update((previous) => previous <= 2 ? 100 : 2 );
    this.dataService.generateData();
  }
}
