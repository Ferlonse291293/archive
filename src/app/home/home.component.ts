import {Component, inject, OnInit} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {SidebarListComponent} from './sidebar/sidebar-list/sidebar-list.component';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {currentLanguage} from '../state/settings/settings.selectors';
import {Language} from '../shared';
import {ClickOutsideDirective} from '../shared/directives/click-outside.directive';
import {SidebarService} from './sidebar/sidebar.service';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
    ClickOutsideDirective,
    SidebarListComponent,
    MatSidenavContent,
    MatSidenav,
    MatSidenavContainer,
    BreadcrumbsComponent,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
   private store = inject(Store);
   public sidebarService = inject(SidebarService)
  getLang(): Observable<Language>{
    return this.store.select(currentLanguage)
  }

  ngOnInit(): void {

  }





}
