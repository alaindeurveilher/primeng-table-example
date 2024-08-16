import { Component, computed, inject, Signal } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { TELEGRAMS_TABLE_COLUMNS } from '../../constants/telegrams-table-columns.constants';
import { Column } from '../../models/column';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-big-table',
  standalone: true,
  imports: [FieldsetModule, TableModule],
  templateUrl: './big-table.component.html',
  styleUrl: './big-table.component.css'
})
export class BigTableComponent {
  protected dataService: DataService = inject(DataService);
  protected columns: Signal<Column[]> = computed(() =>
    Object.keys(TELEGRAMS_TABLE_COLUMNS).map((field: string) => ({
      field,
      header: TELEGRAMS_TABLE_COLUMNS[field].header,
    }))
  );
  protected legend: Signal<string> = computed(() => `Big Table ${this.dataService.splits().bigTable}`);
}
