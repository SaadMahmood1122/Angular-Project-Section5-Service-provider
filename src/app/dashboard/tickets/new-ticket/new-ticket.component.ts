import { Component } from '@angular/core';
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
  onSubmit(inputTitle: HTMLInputElement) {
    console.log(inputTitle); // return <input _ngcontent-ng-c2507262048="" name="title" id="title">
    //fetching value from
    const title = inputTitle.value;
    console.log(title);
  }
}
