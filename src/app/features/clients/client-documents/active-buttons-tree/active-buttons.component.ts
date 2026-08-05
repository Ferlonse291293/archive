import {ChangeDetectionStrategy, Component, output, signal} from '@angular/core';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-active-buttons',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './active-buttons.component.html',
  styleUrl: './active-buttons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActiveButtonsComponent {
  isOpenTree = signal<boolean>(false)
  expandAll = output()
  collapseAll = output()
}
