import {Directive, effect, ElementRef, HostListener, inject, input, model, output} from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  standalone: true,
  host: {
    '(document:click)': 'onDocumentClick($event)'
  }
})
export class ClickOutsideDirective {
  private el = inject(ElementRef);
  enabled = model<boolean>(true);
  clickOutside = output<void>();
  onDocumentClick(event: MouseEvent) {
    if (!this.enabled()) {
      return;
    }
    if (!this.el.nativeElement.contains(event.target)) {
      this.clickOutside.emit();
    }
  }
}
