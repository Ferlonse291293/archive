import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-sidebar-list',
  standalone: true,
  imports: [   MatNavList,  MatIcon],
  templateUrl: './sidebar-list.component.html',
  styleUrl: './sidebar-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarListComponent {

}
