import {Component, inject} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {SidebarListComponent} from './sidebar-list/sidebar-list.component';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {AsyncPipe} from '@angular/common';
import {currentLanguage, isOpenSidebarLanguage} from '../state/settings/settings.selectors';
import {Language} from '../shared';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent,

    SidebarListComponent,
    MatSidenavContent,
    MatSidenav,
    MatSidenavContainer,
    AsyncPipe,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private store = inject(Store);
  isOpenedSidebar = this.store.select(isOpenSidebarLanguage)

  getLang(): Observable<Language>{
    return this.store.select(currentLanguage)
  }



}
