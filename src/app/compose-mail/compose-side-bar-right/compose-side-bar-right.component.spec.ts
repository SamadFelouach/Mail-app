import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeSideBarRightComponent } from './compose-side-bar-right.component';

describe('ComposeSideBarRightComponent', () => {
  let component: ComposeSideBarRightComponent;
  let fixture: ComponentFixture<ComposeSideBarRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeSideBarRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeSideBarRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
