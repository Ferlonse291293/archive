import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDocumentsComponent } from './tree-items.component';

describe('TreeDocumentsComponent', () => {
  let component: TreeDocumentsComponent;
  let fixture: ComponentFixture<TreeDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeDocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
