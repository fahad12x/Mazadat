import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auction-lose',
  standalone: true,
  templateUrl: './auction-lose.html',
  styleUrls: ['./auction-lose.css']
})
export class AuctionLose {
  lastBid: number = 0;
  yourBid: number = 0;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras.state as { lastBid: number; yourBid: number };
    if (state) {
      this.lastBid = state.lastBid;
      this.yourBid = state.yourBid;
    }
  }
}
