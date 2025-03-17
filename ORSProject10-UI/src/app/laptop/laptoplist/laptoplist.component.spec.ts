import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptoplistComponent } from './laptoplist.component';

describe('LaptoplistComponent', () => {
  let component: LaptoplistComponent;
  let fixture: ComponentFixture<LaptoplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptoplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptoplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
