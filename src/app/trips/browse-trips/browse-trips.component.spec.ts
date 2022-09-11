import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseTripsComponent } from './browse-trips.component';

describe('BrowseTripsComponent', () => {
  let component: BrowseTripsComponent;
  let fixture: ComponentFixture<BrowseTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseTripsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
