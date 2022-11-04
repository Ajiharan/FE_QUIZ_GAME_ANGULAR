import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAvatarProfileComponent } from './user-avatar-profile.component';

describe('UserAvatarProfileComponent', () => {
  let component: UserAvatarProfileComponent;
  let fixture: ComponentFixture<UserAvatarProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAvatarProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAvatarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
