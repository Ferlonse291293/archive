import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-image-viewer',
  standalone: true,
  templateUrl: './image-viewer.component.html',
  styleUrl: './image-viewer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageViewerComponent {
  public safeUrl = input.required<SafeUrl | SafeResourceUrl | null>();
}
