import { Component, output } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  add = output<{ title: string; text: string }>();

  onSubmit(inputTitle: string, inputText: string, form: HTMLFormElement) {
    this.add.emit({ title: inputTitle, text: inputText });
    // Reseting the form
    form.reset();
  }
}
