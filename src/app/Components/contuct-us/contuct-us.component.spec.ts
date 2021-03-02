import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContuctUsComponent } from './contuct-us.component';

describe('ContuctUsComponent', () => {
  let component: ContuctUsComponent;
  let fixture: ComponentFixture<ContuctUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContuctUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContuctUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
