import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairsDetailComponent } from './fairs-detail.component';

describe('FairsDetailComponent', () => {
  let component: FairsDetailComponent;
  let fixture: ComponentFixture<FairsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
