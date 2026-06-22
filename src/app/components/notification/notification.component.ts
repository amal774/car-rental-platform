import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {

  @Input() title = '';
  @Input() message = '';
  @Input() visible = false;

  @Output() closed = new EventEmitter<void>();

  close(): void {
    this.closed.emit();
  }
}