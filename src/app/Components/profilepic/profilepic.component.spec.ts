import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilepicComponent } from './profilepic.component';

describe('ProfilepicComponent', () => {
  let component: ProfilepicComponent;
  let fixture: ComponentFixture<ProfilepicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilepicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilepicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
