import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillupdateComponent } from './skillupdate.component';

describe('SkillupdateComponent', () => {
  let component: SkillupdateComponent;
  let fixture: ComponentFixture<SkillupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
