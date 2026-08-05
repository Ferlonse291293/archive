import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveButtonsTreeComponent } from './active-buttons.component';

describe('ActiveButtonsTreeComponent', () => {
  let component: ActiveButtonsTreeComponent;
  let fixture: ComponentFixture<ActiveButtonsTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveButtonsTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveButtonsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
