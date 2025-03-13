import {
  AfterViewInit,
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
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
  // private intervel?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);
  ngOnInit() {
    console.log('ngOnInit()......');
    const intervel = setInterval(() => {
      this.currentStatus =
        this.currentStatus === 'online' ? 'offline' : 'online';
    }, 2000); // Changes status every second

    this.destroyRef.onDestroy(() => {
      clearTimeout(intervel);
    });
  }

  ngAfterViewInit() {
    console.log('View Init');
  }

  // ngOnDestroy() {
  //   clearTimeout(this.intervel);
  // }
}
