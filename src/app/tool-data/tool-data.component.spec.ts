import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolDataComponent } from './tool-data.component';

describe('ToolDataComponent', () => {
  let component: ToolDataComponent;
  let fixture: ComponentFixture<ToolDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
