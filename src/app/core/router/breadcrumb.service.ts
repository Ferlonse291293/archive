import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.build(this.route.root);
      });
  }

  private build(route: ActivatedRoute, url = '', crumbs: Breadcrumb[] = []): Breadcrumb[] {
    const children = route.children;

    for (const child of children) {
      const routeURL = child.snapshot.url.map(s => s.path).join('/');
      if (!routeURL) continue;

      url += `/${routeURL}`;

      const label = child.snapshot.data['breadcrumb'];

      if (label) {
        crumbs.push({ label, url });
      }

      return this.build(child, url, crumbs);
    }

    return crumbs;
  }
}
