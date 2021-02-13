import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoreThreeComponent } from './categore-three.component';

describe('CategoreThreeComponent', () => {
  let component: CategoreThreeComponent;
  let fixture: ComponentFixture<CategoreThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoreThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoreThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
