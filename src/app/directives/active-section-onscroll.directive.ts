import { Directive, Input, AfterViewInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appActiveSectionOnScroll]'
})
export class ActiveSectionOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input('appActiveSectionOnScroll') sectionIds: string[] = [];
  @Input() offset = 120;
  @Input() activeClass = 'active';
  @Input() linkSelector = 'a';

  private scrollHandler = this.onScroll.bind(this);
  private lastSection = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.scrollHandler, { passive: true });
      this.onScroll();
    }
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }

  private onScroll(): void {
    let currentSection = '';
    const scrollPosition = window.scrollY + this.offset;
    for (const id of this.sectionIds) {
      const sectionEl = document.getElementById(id);
      if (sectionEl) {
        const top = sectionEl.offsetTop;
        const height = sectionEl.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          currentSection = id;
        }
      }
    }
    if (currentSection !== this.lastSection) {
      this.lastSection = currentSection;
      this.updateSidebar(currentSection);
    }
  }

  private updateSidebar(activeId: string) {
    const links: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll(this.linkSelector);
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      if (activeId && href.endsWith(`#${activeId}`)) {
        this.renderer.addClass(link, this.activeClass);
      } else if (!activeId && (href === '#' || href === '')) {
        this.renderer.addClass(link, this.activeClass);
      } else {
        this.renderer.removeClass(link, this.activeClass);
      }
    });
  }
}
