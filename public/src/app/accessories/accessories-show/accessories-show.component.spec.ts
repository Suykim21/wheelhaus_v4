import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesShowComponent } from './accessories-show.component';

describe('AccessoriesShowComponent', () => {
  let component: AccessoriesShowComponent;
  let fixture: ComponentFixture<AccessoriesShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoriesShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
