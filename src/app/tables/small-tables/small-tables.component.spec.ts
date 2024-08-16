import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallTablesComponent } from './small-tables.component';

describe('SmallTablesComponent', () => {
  let component: SmallTablesComponent;
  let fixture: ComponentFixture<SmallTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallTablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
