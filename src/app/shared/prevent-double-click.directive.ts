import {Directive, effect, ElementRef, inject, input, Renderer2, signal} from '@angular/core';

@Directive({
  selector: 'button[preDClick]',
  standalone: true,
  host: {
    '(click)': ' handleClick($event)'
  }
})

export class PreventDoubleClickDirective {
  lock = input!<boolean>(false, {alias: 'preDClick'})
  private el = inject(ElementRef<HTMLButtonElement>)

  constructor() {

    effect(() => {
      this.lock() ?  this.el.nativeElement.disabled = true :  this.el.nativeElement.disabled = false;
    })

  }


  handleClick(event: MouseEvent){
    event.stopPropagation()
    event.preventDefault()
    this.el.nativeElement.disabled = true;
  }


}
