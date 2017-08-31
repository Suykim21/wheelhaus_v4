import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeStoreNewComponent } from './bike-store-new.component';

describe('BikeStoreNewComponent', () => {
  let component: BikeStoreNewComponent;
  let fixture: ComponentFixture<BikeStoreNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeStoreNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeStoreNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
