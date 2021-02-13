import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartItemsComponent } from './part-items.component';

describe('PartItemsComponent', () => {
  let component: PartItemsComponent;
  let fixture: ComponentFixture<PartItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
