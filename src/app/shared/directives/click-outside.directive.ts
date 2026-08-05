import {Directive, ElementRef, inject, input, output} from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  standalone: true,
  host: {
    '(document:click)': 'onDocumentClick($event)'
  }
})
export class ClickOutsideDirective {
  private el = inject(ElementRef);
  enabled = input(false);
  clickOutside = output<void>();
  onDocumentClick(event: MouseEvent) {
    event.stopPropagation()
    event.preventDefault()
    if (!this.enabled()) {
      return;
    }
    if (!this.el.nativeElement.contains(event.target)) {
      this.clickOutside.emit();
    }
  }
}
