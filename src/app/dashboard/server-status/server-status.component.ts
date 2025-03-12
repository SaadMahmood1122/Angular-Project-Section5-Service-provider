import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  currentStatus = 'online';
  ngOnInit() {
    console.log('ngOnInit()......');
    setInterval(() => {
      this.currentStatus =
        this.currentStatus === 'online' ? 'offline' : 'online';
    }, 2000); // Changes status every second
  }
}
