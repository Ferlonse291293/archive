import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import { ScrollModeType } from 'ngx-extended-pdf-viewer';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-pdf-viewer',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule],
  templateUrl: './pdf-viewer.component.html',
  styleUrl: './pdf-viewer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PdfViewerComponent {
  public safeUrl = input.required<string>();
  public readonly ScrollModeType = ScrollModeType

  constructor() {
    pdfDefaultOptions.disableStream = false;
    pdfDefaultOptions.disableAutoFetch = false;
  }

}
