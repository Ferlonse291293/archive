import {ChangeDetectionStrategy, Component, inject} from '@angular/core';

import {MatCard, MatCardContent, MatCardImage, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {RouterService} from '../../core/services/router.service';
import {NavLinks} from '../../core/router/navigation';
import {APP_ROUTES} from '../../core/router/routes';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-features-hub',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardImage,
    MatCardContent
  ],
  templateUrl: './features-hub.component.html',
  styleUrl: './features-hub.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturesHubComponent {
  private routerService = inject(RouterService)
  private translate = inject(TranslateService);
  features = [
    { title: this.translate.instant(APP_ROUTES.ANALYTICS.name) ,
      description: 'Статистика',
      imageSrc: "assets/images/analytics.svg",
      icon: 'bar_chart',
      route:  NavLinks.ANALYTICS },
    { title: this.translate.instant(APP_ROUTES.CLIENTS.name),
      description: 'Clients',
      imageSrc: "assets/images/individuals.svg",
      icon: 'people',
      route: NavLinks.CLIENTS },
    { title: this.translate.instant(APP_ROUTES.SETTINGS.name),
      description: 'Настройки',
      imageSrc: "assets/images/settings.svg",
      icon: 'settings',
      route:  NavLinks.SETTING },
    { title: this.translate.instant(APP_ROUTES.DOCUMENTS.name),
      description: 'Настройки',
      imageSrc: "assets/images/documents.svg",
      icon: 'documents',
      route: NavLinks.DOCUMENTS }
  ];
  openFeature(route: string) {
    this.routerService.redirectTo(route);
  }
}
