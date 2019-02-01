import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlabeldialogComponent } from './editlabeldialog.component';

describe('EditlabeldialogComponent', () => {
  let component: EditlabeldialogComponent;
  let fixture: ComponentFixture<EditlabeldialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditlabeldialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlabeldialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
