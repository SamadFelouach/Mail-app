import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeHeaderComponent } from './compose-header.component';

describe('ComposeHeaderComponent', () => {
  let component: ComposeHeaderComponent;
  let fixture: ComponentFixture<ComposeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
