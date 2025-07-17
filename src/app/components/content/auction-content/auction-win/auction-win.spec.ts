import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionWin } from './auction-win';

describe('AuctionWin', () => {
  let component: AuctionWin;
  let fixture: ComponentFixture<AuctionWin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuctionWin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuctionWin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
