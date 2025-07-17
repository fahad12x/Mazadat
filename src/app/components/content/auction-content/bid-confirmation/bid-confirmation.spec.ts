import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidConfirmation } from './bid-confirmation';

describe('BidConfirmation', () => {
  let component: BidConfirmation;
  let fixture: ComponentFixture<BidConfirmation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidConfirmation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidConfirmation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
