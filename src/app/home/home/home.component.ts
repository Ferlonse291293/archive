import {Component, inject} from '@angular/core';
import {HeaderComponent} from '../../shared/ui/header/header.component';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from '../../shared/ui/footer/footer.component';
import {Store} from '@ngrx/store';
import {currentLanguage} from '../../state/settings/settings.selectors';
import {Language} from '../../shared';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private store = inject(Store);


  getLang(): Observable<Language>{
    return this.store.select(currentLanguage)
  }


}
