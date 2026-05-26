import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AuthContextService} from './configs/auth-context.service';

@Component({
  selector: 'app-auth',
  imports: [RouterOutlet],
  providers: [AuthContextService],
  standalone: true,
  template: `<router-outlet />`,
})
export class AuthComponent implements OnInit{
  private authContext = inject<AuthContextService>(AuthContextService);

  ngOnInit(): void {

  }


}
