import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoreOneComponent } from './categore-one.component';

describe('CategoreOneComponent', () => {
  let component: CategoreOneComponent;
  let fixture: ComponentFixture<CategoreOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoreOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoreOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
