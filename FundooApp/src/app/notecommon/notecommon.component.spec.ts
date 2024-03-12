import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotecommonComponent } from './notecommon.component';

describe('NotecommonComponent', () => {
  let component: NotecommonComponent;
  let fixture: ComponentFixture<NotecommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotecommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotecommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
