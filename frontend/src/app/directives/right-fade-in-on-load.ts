import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appRightFadeInOnLoad]'
})
export class RightFadeInOnLoadDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'right-fade-in');
    setTimeout(() => {
      this.renderer.addClass(this.el.nativeElement, 'right-fade-in-visible');
    }, 50); // délai de 0.5s
  }
}
