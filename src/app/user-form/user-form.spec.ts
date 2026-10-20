import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserForm } from './user-form';

describe('UserForm', () => {
  let component: UserForm;
  let fixture: ComponentFixture<UserForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserForm],
    }).compileComponents();

    fixture = TestBed.createComponent(UserForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show validation errors after submitting an empty form', () => {
    component.submitForm();
    fixture.detectChanges();

    expect(component.userForm.controls.username.touched).toBe(true);
    expect(component.userForm.controls.email.touched).toBe(true);
    expect(component.userForm.controls.password.touched).toBe(true);
    expect(fixture.nativeElement.querySelectorAll('.error').length).toBe(3);
  });
});
