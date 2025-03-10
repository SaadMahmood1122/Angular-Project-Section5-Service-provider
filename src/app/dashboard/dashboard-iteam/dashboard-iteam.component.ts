import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-iteam',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-iteam.component.html',
  styleUrl: './dashboard-iteam.component.css',
})
export class DashboardIteamComponent {
  @Input({ required: true }) imag!: { src: string; alt: string };
  @Input({ required: true }) title!: string;
}
