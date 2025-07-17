import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-bid-confirmation',
  standalone: true,
  imports: [NgIf],
  templateUrl: './bid-confirmation.html',
  styleUrl: './bid-confirmation.css'
})
export class BidConfirmation {
@Input() amount: number = 0;

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  @Output() dontShowAgain = new EventEmitter<void>();

  hideMessage = false;

  toggleHideMessage() {
    this.hideMessage = !this.hideMessage;
    this.dontShowAgain.emit();
  }
}
