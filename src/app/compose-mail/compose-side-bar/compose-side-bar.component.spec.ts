import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeSideBarComponent } from './compose-side-bar.component';

describe('ComposeSideBarComponent', () => {
  let component: ComposeSideBarComponent;
  let fixture: ComponentFixture<ComposeSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
