import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appLeftFadeInOnScroll]'
})
export class LeftFadeInOnScrollDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'left-fade-in');
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'left-fade-in-visible');
            observer.unobserve(this.el.nativeElement);
          }
        });
      }, { threshold: 0.1 });
      observer.observe(this.el.nativeElement);
    }
  }
}
