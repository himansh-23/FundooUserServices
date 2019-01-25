import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebarComponent } from './notebar.component';

describe('NotebarComponent', () => {
  let component: NotebarComponent;
  let fixture: ComponentFixture<NotebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
