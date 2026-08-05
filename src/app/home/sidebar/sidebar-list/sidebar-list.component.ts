import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';

import {TranslateService} from '@ngx-translate/core';
import {NavLinks, NavLinksKey} from '../../../core/router/navigation';
import {RouterService} from '../../../core/services/router.service';
import {MatIconButton} from "@angular/material/button";
import {SidebarService} from '../sidebar.service';

interface ISidebarItem{
  link: NavLinksKey,
  name: string,
  iconName: string,
  isDisabled: boolean
  children: ISidebarItem[]
}

@Component({
  selector: 'app-sidebar-list',
  standalone: true,
    imports: [MatNavList, MatIcon, MatListItem, MatIconButton],
  templateUrl: './sidebar-list.component.html',
  styleUrl: './sidebar-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarListComponent {
  private translate = inject(TranslateService)
  private routerService = inject(RouterService)
  public sidebarService = inject(SidebarService)
sidebarItems:  ISidebarItem[] = [
  {
    link: NavLinks.CLIENTS,
    name: this.translate.instant('ROUTES.CLIENTS'),
    iconName: 'people',
    isDisabled: false,
    children: []
  },
  {
    link: NavLinks.DOCUMENTS,
    name: this.translate.instant('ROUTES.DOCUMENTS'),
    iconName: 'article',
    isDisabled: true,
    children: []
  },
  {
    link: NavLinks.SETTINGS,
    name: this.translate.instant('ROUTES.SETTINGS'),
    iconName: 'settings',
    isDisabled: true,
    children: []
  }
]

  redirectTo(key:  NavLinksKey) {
    this.routerService.redirectTo(key)
  }
}

