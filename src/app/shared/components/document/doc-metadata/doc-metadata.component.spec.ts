import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocMetadataComponent } from './doc-metadata.component';

describe('DocMetadataComponent', () => {
  let component: DocMetadataComponent;
  let fixture: ComponentFixture<DocMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocMetadataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
