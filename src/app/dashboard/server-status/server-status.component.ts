import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, AfterViewInit, OnDestroy {
  currentStatus = 'online';
  private intervel?: ReturnType<typeof setInterval>;
  ngOnInit() {
    console.log('ngOnInit()......');
    this.intervel = setInterval(() => {
      this.currentStatus =
        this.currentStatus === 'online' ? 'offline' : 'online';
    }, 2000); // Changes status every second
  }

  ngAfterViewInit() {
    console.log('View Init');
  }

  ngOnDestroy() {
    clearTimeout(this.intervel);
  }
}
