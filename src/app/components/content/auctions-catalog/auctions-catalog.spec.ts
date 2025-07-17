import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionsCatalog } from './auctions-catalog';

describe('AuctionsCatalog', () => {
  let component: AuctionsCatalog;
  let fixture: ComponentFixture<AuctionsCatalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuctionsCatalog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuctionsCatalog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
