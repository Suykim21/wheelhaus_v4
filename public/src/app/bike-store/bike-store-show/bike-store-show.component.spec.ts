import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeStoreShowComponent } from './bike-store-show.component';

describe('BikeStoreShowComponent', () => {
  let component: BikeStoreShowComponent;
  let fixture: ComponentFixture<BikeStoreShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeStoreShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeStoreShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
