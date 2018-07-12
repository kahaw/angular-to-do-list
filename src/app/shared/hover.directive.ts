import { Directive, HostListener, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {
  @Input()
  private date: string;
  private paragraph;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('p');
   }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  mouseenter() {
    this.paragraph.innerHTML = this.date;
    const html = this.el.nativeElement;
    this.renderer.appendChild(html, this.paragraph);
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.paragraph.innerHTML = this.date;
    const html = this.el.nativeElement;
    this.renderer.removeChild(html, this.paragraph);
  }

}
