import { Component, computed, Signal } from '@angular/core';
import { Message } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-no-item-selected',
  standalone: true,
  imports: [MessagesModule],
  templateUrl: './no-item-selected.component.html',
  styleUrl: './no-item-selected.component.css'
})
export class NoItemSelectedComponent {
  protected noTelegramSelected: Signal<Message[]> = computed(() => [
    {
      severity: 'info',
      summary: 'Info',
      detail: 'Please select an item to display the small tables.',
    },
  ]);
}
