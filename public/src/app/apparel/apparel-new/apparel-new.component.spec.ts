import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparelNewComponent } from './apparel-new.component';

describe('ApparelNewComponent', () => {
  let component: ApparelNewComponent;
  let fixture: ComponentFixture<ApparelNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
