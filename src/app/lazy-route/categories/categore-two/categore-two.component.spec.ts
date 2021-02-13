import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoreTwoComponent } from './categore-two.component';

describe('CategoreTwoComponent', () => {
  let component: CategoreTwoComponent;
  let fixture: ComponentFixture<CategoreTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoreTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoreTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
