import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsCustom } from './user-details-custom';

describe('UserDetailsCustom', () => {
  let component: UserDetailsCustom;
  let fixture: ComponentFixture<UserDetailsCustom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailsCustom],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailsCustom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
