import { Component } from '@angular/core';
import { NgIf, NgClass, DecimalPipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BidConfirmation } from '../bid-confirmation/bid-confirmation';

@Component({
  selector: 'app-auction-detail',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    DecimalPipe,
    BidConfirmation
  ],
  templateUrl: './auction-detail.html',
  styleUrls: ['./auction-detail.css']
})
export class AuctionDetail {

  lastBid: number = 50000;
  yourBid: number = 0;
  currentBid: number = 50000;

  minutes: number = 0;
  seconds: number = 25;
  isTimerEnded: boolean = false;

  showConfirm: boolean = false;
  popupDisabled: boolean = false;

  private timer: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.startTimer();
  }

  increment() {
    this.currentBid += 1000;
  }

  decrement() {
    if (this.currentBid > 1000) {
      this.currentBid -= 1000;
    }
  }

  openConfirm() {
    if (this.popupDisabled) {
      this.placeBid();
    } else {
      this.showConfirm = true;
    }
  }

  closeConfirm() {
    this.showConfirm = false;
  }

  disablePopup() {
    this.popupDisabled = true;
  }

  placeBid() {
    this.lastBid = this.currentBid;
    this.yourBid = this.currentBid;
    this.showConfirm = false;
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          clearInterval(this.timer);
          this.endAuction();
        } else {
          this.minutes--;
          this.seconds = 59;
        }
      } else {
        this.seconds--;
      }
    }, 1000);
  }

  endAuction() {
  this.isTimerEnded = true;


  if (this.yourBid >= this.lastBid) {
    this.router.navigate(['win'], {
      relativeTo: this.route,
      state: { lastBid: this.lastBid, yourBid: this.yourBid }
    });
  } else {
    this.router.navigate(['lose'], {
      relativeTo: this.route,
      state: { lastBid: this.lastBid, yourBid: this.yourBid }
    });
  }
}

  

}
