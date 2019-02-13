import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratordialogComponent } from './collaboratordialog.component';

describe('CollaboratordialogComponent', () => {
  let component: CollaboratordialogComponent;
  let fixture: ComponentFixture<CollaboratordialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaboratordialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratordialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
