import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {MatCard, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';


@Component({
  selector: 'app-plugin-hub',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatIcon,

  ],
  templateUrl: './plugin-hub.component.html',
  styleUrl: './plugin-hub.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PluginHubComponent {
  private router = inject(Router)
  plugins = [
    { title: 'Analytics', description: 'Статистика', icon: 'bar_chart', route: '/analytics' },
    { title: 'Users', description: 'Пользователи', icon: 'people', route: '/users' },
    { title: 'Settings', description: 'Настройки', icon: 'settings', route: '/settings' }
  ];



  openPlugin(route: string) {
    // this.router.navigate([route]);
  }
}
