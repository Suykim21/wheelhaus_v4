import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparelDestroyComponent } from './apparel-destroy.component';

describe('ApparelDestroyComponent', () => {
  let component: ApparelDestroyComponent;
  let fixture: ComponentFixture<ApparelDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelDestroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
