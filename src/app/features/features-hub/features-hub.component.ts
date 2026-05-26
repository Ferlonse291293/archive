import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {MatCard, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {RouterService} from '../../core/services/router.service';
import {NavLinks} from '../../core/router/navigation';


@Component({
  selector: 'app-features-hub',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatIcon
  ],
  templateUrl: './features-hub.component.html',
  styleUrl: './features-hub.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturesHubComponent {
  private routerService = inject(RouterService)
  features = [
    { title: 'Analytics', description: 'Статистика', icon: 'bar_chart', route: '/analytics' },
    { title: 'Clients', description: 'Пользователи', icon: 'people', route: NavLinks.CLIENTS },
    { title: 'Settings', description: 'Настройки', icon: 'settings', route: '/settings' }
  ];
  openFeature(route: string) {
    this.routerService.redirectTo(route);
  }
}
