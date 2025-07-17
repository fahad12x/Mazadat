import { Routes } from '@angular/router';
import { Dashboard } from './components/content/dashboard/dashboard';
import { AuctionsCatalog } from './components/content/auctions-catalog/auctions-catalog';
import { Auction } from './components/content/auction/auction';
import { AuctionDetail } from './components/content/auction-content/auction-detail/auction-detail';
import { AuctionLose } from './components/content/auction-content/auction-lose/auction-lose';
import { AuctionWin } from './components/content/auction-content/auction-win/auction-win';
export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'auctions-catalog', component: AuctionsCatalog },
  {
    path: 'auction',
    component: Auction,
    children: [
      { path: '', component: AuctionDetail }, 
      { path: 'lose', component: AuctionLose },
      {path: 'win', component:AuctionWin} 
    ]
  }
];
