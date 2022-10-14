import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesComponentComponent } from './purchases-component.component';

describe('PurchasesComponentComponent', () => {
  let component: PurchasesComponentComponent;
  let fixture: ComponentFixture<PurchasesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
