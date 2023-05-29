import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponentt } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponentt;
  let fixture: ComponentFixture<NavbarComponentt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponentt ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponentt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
