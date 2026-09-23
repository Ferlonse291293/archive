import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatIcon} from '@angular/material/icon';
import {Store} from '@ngrx/store';
import {MatButton, MatIconButton} from '@angular/material/button';

import {MatToolbar} from '@angular/material/toolbar';
import {LogoComponent} from '../../shared/components/logo/logo/logo.component';
import {SidebarService} from '../sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    MatToolbar,
    MatIconButton,
    LogoComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private translate = inject(TranslateService);
  private store = inject(Store);
  public sidebarService = inject(SidebarService)
  logout() {

  }
}
