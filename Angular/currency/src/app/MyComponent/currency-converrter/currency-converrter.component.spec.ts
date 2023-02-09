import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyConverrterComponent } from './currency-converrter.component';

describe('CurrencyConverrterComponent', () => {
  let component: CurrencyConverrterComponent;
  let fixture: ComponentFixture<CurrencyConverrterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyConverrterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyConverrterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
