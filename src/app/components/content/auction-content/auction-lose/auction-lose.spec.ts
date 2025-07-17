import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionLose } from './auction-lose';

describe('AuctionLose', () => {
  let component: AuctionLose;
  let fixture: ComponentFixture<AuctionLose>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuctionLose]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuctionLose);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
