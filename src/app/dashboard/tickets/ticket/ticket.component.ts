import { Component, EventEmitter, Output, input, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  detailVisible = signal(false);
  data = input.required<Ticket>();
  @Output() removeTicket = new EventEmitter<string>();

  onRemoveTicket(id: string) {
    console.log('remove ticket btn pressed...' + id);
    this.removeTicket.emit(id);
  }

  onToggleDetails() {
    //  this.detailVisible.set(!this.detailVisible()) // or
    this.detailVisible.update((wasVisible) => {
      return !wasVisible;
    });
  }
}
