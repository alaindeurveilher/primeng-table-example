import { Component, computed, inject, Signal } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { Packet } from '../../models/api';
import { DataService } from '../../services/data.service';
import { NoItemSelectedComponent } from './no-item-selected/no-item-selected.component';
import { SmallTableComponent } from './small-table/small-table.component';

@Component({
  selector: 'app-small-tables',
  standalone: true,
  imports: [FieldsetModule, SmallTableComponent, NoItemSelectedComponent],
  templateUrl: './small-tables.component.html',
  styleUrl: './small-tables.component.css'
})
export class SmallTablesComponent {
  private dataService: DataService = inject(DataService);
  packets: Signal<Packet[]> = computed(() => this.dataService.selectedPackets());
  protected legend: Signal<string> = computed(() => `Small Tables ${this.dataService.splits().smallTable}`);
}
