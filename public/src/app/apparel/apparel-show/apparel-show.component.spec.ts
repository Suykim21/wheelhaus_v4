import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparelShowComponent } from './apparel-show.component';

describe('ApparelShowComponent', () => {
  let component: ApparelShowComponent;
  let fixture: ComponentFixture<ApparelShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
