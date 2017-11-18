import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEntriesComponent } from './search-entries.component';

describe('SearchEntriesComponent', () => {
  let component: SearchEntriesComponent;
  let fixture: ComponentFixture<SearchEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
