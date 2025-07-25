import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientClientlistComponent } from './client-clientlist.component';

describe('ClientClientlistComponent', () => {
  let component: ClientClientlistComponent;
  let fixture: ComponentFixture<ClientClientlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientClientlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientClientlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
