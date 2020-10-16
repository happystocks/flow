import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetAmountComponent } from './asset-amount.component';

describe('AssetAmountComponent', () => {
  let component: AssetAmountComponent;
  let fixture: ComponentFixture<AssetAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
