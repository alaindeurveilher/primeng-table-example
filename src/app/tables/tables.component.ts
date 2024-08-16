import { Component, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { BigTableComponent } from "./big-table/big-table.component";
import { SmallTablesComponent } from "./small-tables/small-tables.component";

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [BigTableComponent, SmallTablesComponent],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent {
  protected dataService: DataService = inject(DataService);
}
