import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocFilesComponent } from './doc-files.component';

describe('DocFilesComponent', () => {
  let component: DocFilesComponent;
  let fixture: ComponentFixture<DocFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocFilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
