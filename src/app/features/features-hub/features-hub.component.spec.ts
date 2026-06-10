import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesHubComponent } from './features-hub.component';

describe('AppPluginHubComponent', () => {
  let component: FeaturesHubComponent;
  let fixture: ComponentFixture<FeaturesHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesHubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
