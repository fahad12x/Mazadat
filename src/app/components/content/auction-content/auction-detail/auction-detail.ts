import { Component } from '@angular/core';
import { NgIf, NgClass, DecimalPipe, NgFor } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BidConfirmation } from '../bid-confirmation/bid-confirmation';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auction-detail',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    NgFor,
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

  steps = [
    { number: 1, icon: 'bi-key-fill', title: 'التسجيل' },
    { number: 2, icon: 'bi-credit-card', title: 'الدفع' },
    { number: 3, icon: 'bi-megaphone-fill', title: 'المزايدة' },
    { number: 4, icon: 'bi-trophy-fill', title: 'الفوز' },
    { number: 5, icon: 'bi-file-earmark-text', title: 'التوثيق' },
    { number: 6, icon: 'bi-car-front-fill', title: 'الاستلام' }
  ];

  carInfo = [
    { icon: 'bi-calendar-check', label: 'الموديل 2024' },
    { icon: 'bi-gear-fill', label: 'ناقل حركة أوتوماتيك' },
    { icon: 'bi-fuel-pump-fill', label: 'بنزين' },
    { icon: 'bi-palette-fill', label: 'لون أبيض' },
    { icon: 'bi-person-vcard', label: 'مالك واحد' },
    { icon: 'bi-geo-alt-fill', label: 'الرياض' }
  ];

  reports = [
    { title: 'عنوان', desc: 'تقرير فحص السيارة الكامل' },
    { title: 'عنوان', desc: 'تقرير حالة المحرك' },
    { title: 'عنوان', desc: 'تقرير فحص الهيكل' }
  ];

  private timer: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
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
  this.showConfirm = false;

  if (this.currentBid >= this.lastBid) {
    this.lastBid = this.currentBid;
    this.yourBid = this.currentBid;
    this.toastr.success('تم تقديم المزايدة بنجاح!', 'نجاح');
  } else {
    this.yourBid = this.currentBid;
    this.toastr.error('عرضك أقل من آخر مزايدة!', 'فشل');
  }
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
