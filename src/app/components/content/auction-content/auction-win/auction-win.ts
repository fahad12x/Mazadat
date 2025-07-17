import { Component } from '@angular/core';

@Component({
  selector: 'app-auction-win',
  standalone: true,
  templateUrl: './auction-win.html',
  styleUrls: ['./auction-win.css']
})
export class AuctionWin {
  carName: string = 'BMW X5';
  winnerName: string = 'فهد محمد';
}
