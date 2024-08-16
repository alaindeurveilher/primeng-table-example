import { Component, computed, inject, input, InputSignal, Signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PACKET_TABLE_COLUMNS } from '../../../constants/packet-table-columns.constants';
import { Packet, Variable } from '../../../models/api';
import { Columns } from '../../../models/columns';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-small-table',
  standalone: true,
  imports: [TableModule],
  templateUrl: './small-table.component.html',
  styleUrl: './small-table.component.css'
})
export class SmallTableComponent {
  protected dataService: DataService = inject(DataService);
  item: InputSignal<Packet> = input.required<Packet>();
  protected columns: Signal<Columns> = computed(() => PACKET_TABLE_COLUMNS);
  protected listVariables: Signal<Variable[]> = computed(() => this.item()?.variables ?? []);
}
