import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorviderDetailComponent } from './porvider-detail.component';

describe('PorviderDetailComponent', () => {
  let component: PorviderDetailComponent;
  let fixture: ComponentFixture<PorviderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorviderDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PorviderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
