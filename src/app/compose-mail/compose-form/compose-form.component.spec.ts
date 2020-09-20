import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeFormComponent } from './compose-form.component';

describe('ComposeFormComponent', () => {
  let component: ComposeFormComponent;
  let fixture: ComponentFixture<ComposeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
