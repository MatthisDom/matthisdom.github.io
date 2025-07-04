import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[fadeInOnLoad]'
})
export class FadeInOnLoadDirective implements AfterViewInit 
{

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
        this.renderer.setStyle(this.el.nativeElement, 'transition', 'opacity 0.8s ease');
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
        }, 50); // slight delay to trigger transition
    }
}