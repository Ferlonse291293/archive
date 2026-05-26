import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {MatIcon} from '@angular/material/icon';
import {Store} from '@ngrx/store';
import {MatButton, MatIconButton} from '@angular/material/button';

import {MatToolbar} from '@angular/material/toolbar';
import {settingsActions, toggleSidebarActions} from '../../state/settings/settings.actions';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslatePipe,
    MatButton,
    MatIcon,
    MatToolbar,
    MatIconButton,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private translate = inject(TranslateService);
  private store = inject(Store);

  toggleSidebar(){
    this.store.dispatch(settingsActions.toggleSidebarActions.toggle())
  }

  logout() {

  }
}
