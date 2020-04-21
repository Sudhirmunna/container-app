import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuseComponent } from './resuse.component';

describe('ResuseComponent', () => {
  let component: ResuseComponent;
  let fixture: ComponentFixture<ResuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
