import {inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {NavLinks, NavLinksKey} from '../router/navigation';


@Injectable({providedIn: 'root'})

export class RouterService{
  private router = inject(Router)


  redirectTo(key: string){
    this.router.navigate([key])
  }
}
