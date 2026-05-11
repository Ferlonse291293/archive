import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsSearchComponent } from './clients-search.component';

describe('ClientsSearchComponent', () => {
  let component: ClientsSearchComponent;
  let fixture: ComponentFixture<ClientsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
