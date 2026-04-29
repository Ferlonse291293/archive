import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private translate = inject(TranslateService);
}
