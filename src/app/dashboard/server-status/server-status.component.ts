import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = 'online';
  ngOnInit() {
    console.log('ngOnInit()......');
    setInterval(() => {
      this.currentStatus =
        this.currentStatus === 'online' ? 'offline' : 'online';
    }, 2000); // Changes status every second
  }
}
