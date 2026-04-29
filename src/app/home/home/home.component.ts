import { Component } from '@angular/core';
import {HeaderComponent} from '../../shared/ui/header/header.component';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from '../../shared/ui/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
