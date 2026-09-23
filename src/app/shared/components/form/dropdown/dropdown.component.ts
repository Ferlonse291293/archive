import {ChangeDetectionStrategy, Component, effect, input, output, signal} from '@angular/core';
import {ClickOutsideDirective} from '../../../directives/click-outside.directive';
import {MatIcon} from '@angular/material/icon';

export interface IDropdownItem{
  imgUrl?: string;
  title: string;
  value: string;
  hasImage: boolean;
}

@Component({
  selector: 'app-dropdown',
  standalone: true,
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

  hostDirectives: [{
    directive: ClickOutsideDirective,
    inputs: ['enabled'],
    outputs: ['clickOutside']
  }],
  host: {
    '[enabled]': 'isOpen()',
    '(clickOutside)': 'close()'
  },
  imports: [
    MatIcon
  ]
})
export class DropdownComponent {
  title = input.required<string>()
  items = input<IDropdownItem[]>([])
  onSelectItem = output<IDropdownItem>()
  value = signal<IDropdownItem>({} as IDropdownItem);
  isOpen = signal<boolean>(false);
  constructor() {
    effect(() => {
      const items = this.items();
      if (items?.length) {
        this.value.set(items[0]);
      }
    });
  }

  close(){
    this.isOpen.set(false)
  }

  selectItem(i: IDropdownItem){
    this.value.set(i)
    this.onSelectItem.emit(i)
    this.close()
  }
}
