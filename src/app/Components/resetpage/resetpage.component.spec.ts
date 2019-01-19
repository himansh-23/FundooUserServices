import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpageComponent } from './resetpage.component';

describe('ResetpageComponent', () => {
  let component: ResetpageComponent;
  let fixture: ComponentFixture<ResetpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
