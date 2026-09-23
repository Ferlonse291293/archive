import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {isFileImage, isFilePDF} from '../../../core/helpers/mime-type-files';
import {PdfViewerComponent} from './pdf-viewer/pdf-viewer.component';
import {ImageViewerComponent} from './image-viewer/image-viewer.component';

@Component({
  selector: 'app-file-viewer',
  imports: [
    PdfViewerComponent,
    ImageViewerComponent
  ],
  templateUrl: './file-viewer.component.html',
  styleUrl: './file-viewer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilePreviewComponent {
  private sanitizer = inject(DomSanitizer);
  protected readonly isFilePDF = isFilePDF;
  protected readonly isFileImage = isFileImage;

  public url = input<string>('');
  public mimeType = input<string>('');

  safeUrl = computed<SafeUrl | SafeResourceUrl | null | string >(() => {
    if (!this.mimeType() || !this.url()) return null;
    return isFilePDF(this.mimeType())
      ? this.url()
      : this.sanitizer.bypassSecurityTrustUrl(this.url());
  });

}
