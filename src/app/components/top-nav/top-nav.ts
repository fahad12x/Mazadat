import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  templateUrl: './top-nav.html',
  styleUrls: ['./top-nav.css']
})
export class TopNav {
  @Output() burgerClicked = new EventEmitter<void>();

  emitBurgerClick() {
    this.burgerClicked.emit();
  }
}
