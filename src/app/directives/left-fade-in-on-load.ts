import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appLeftFadeInOnLoad]'
})
export class LeftFadeInOnLoadDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'left-fade-in');
    setTimeout(() => {
      this.renderer.addClass(this.el.nativeElement, 'left-fade-in-visible');
    }, 50); // délai de 0.5s
  }
}
