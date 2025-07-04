import { Directive, ElementRef, Renderer2, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appBottomFadeInOnScroll]'
})
export class BottomFadeInOnScrollDirective implements AfterViewInit {
    constructor(private el: ElementRef, private renderer: Renderer2) {}
    @Input() fadeInDelay: number = 0; 
  ngAfterViewInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'bottom-fade-in');
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => 
            {
                this.renderer.addClass(this.el.nativeElement, 'bottom-fade-in-visible');
            }, this.fadeInDelay);
            observer.unobserve(this.el.nativeElement);
          }
        });
      }, { threshold: 0.1 });
      observer.observe(this.el.nativeElement);
    }
  }
}
