import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeStoreComponent } from './bike-store.component';

describe('BikeStoreComponent', () => {
  let component: BikeStoreComponent;
  let fixture: ComponentFixture<BikeStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
