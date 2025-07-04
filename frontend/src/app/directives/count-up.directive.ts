import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCountUp]'
})
export class CountUpDirective implements OnInit {
  @Input('appCountUp') targetNumber: number = 0;
  @Input() duration: number = 1500; // ms

  constructor(private el: ElementRef) {}

  ngOnInit() 
  {
    // N'exécute l'animation que côté navigateur (évite l'erreur SSR)
    if (typeof window !== 'undefined' && typeof window.requestAnimationFrame === 'function') 
    {
      this.animateCount();
    } 
    else 
    {
      // Fallback SSR : affiche directement la valeur cible
      this.el.nativeElement.textContent = this.targetNumber;
    }
}  

  animateCount() {
    const start = 0;
    const end = this.targetNumber;
    const duration = this.duration;
    const startTime = performance.now();
    const step = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      this.el.nativeElement.textContent = value;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        this.el.nativeElement.textContent = end;
      }
    };
    requestAnimationFrame(step);
  }
}
