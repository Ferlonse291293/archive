import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginHubComponent } from './plugin-hub.component';

describe('AppPluginHubComponent', () => {
  let component: PluginHubComponent;
  let fixture: ComponentFixture<PluginHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PluginHubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PluginHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
