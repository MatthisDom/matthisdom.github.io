import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appFadeInOnScroll]'
})
export class FadeInOnScrollDirective implements AfterViewInit 
{

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    console.log('FadeInOnScrollDirective initialisé', this.el.nativeElement.className);
    this.renderer.addClass(this.el.nativeElement, 'fade-in');
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          console.log('IntersectionObserver entry:', entry);
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'fade-in-visible');
            console.log('Classe fade-in-visible ajoutée', this.el.nativeElement.className);
            observer.unobserve(this.el.nativeElement);
          }
        });
      }, { threshold: 0.1 });
      observer.observe(this.el.nativeElement);
    }
  }
}
