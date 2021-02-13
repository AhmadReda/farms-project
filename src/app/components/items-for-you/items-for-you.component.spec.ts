import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsForYouComponent } from './items-for-you.component';

describe('ItemsForYouComponent', () => {
  let component: ItemsForYouComponent;
  let fixture: ComponentFixture<ItemsForYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsForYouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
