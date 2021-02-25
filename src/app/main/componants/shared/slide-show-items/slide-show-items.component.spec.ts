import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideShowItemsComponent } from './slide-show-items.component';

describe('SlideShowItemsComponent', () => {
  let component: SlideShowItemsComponent;
  let fixture: ComponentFixture<SlideShowItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideShowItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideShowItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
