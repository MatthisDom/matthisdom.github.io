import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOpacityChangeOnScroll]'
})
export class OpacityChangeOnScrollDirective {
  @Input() scrollMax: number = 300; // Hauteur de scroll pour opacité max

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() 
  {
    if (typeof window === 'undefined') return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let opacity = Math.min(scrollTop / this.scrollMax, 1);
    this.renderer.setStyle(this.el.nativeElement, 'opacity', opacity.toString());
  }

  ngOnInit() 
  {
    this.onWindowScroll();
  }
}
