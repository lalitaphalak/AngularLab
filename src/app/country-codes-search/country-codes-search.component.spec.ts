import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCodesSearchComponent } from './country-codes-search.component';

describe('CountryCodesSearchComponent', () => {
  let component: CountryCodesSearchComponent;
  let fixture: ComponentFixture<CountryCodesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryCodesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCodesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
