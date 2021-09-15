import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input()
  appHighlight: string = "";
  @Input()
  secondColor: string = "";

  constructor(private el: ElementRef) {
  }

  changeBackColor = (backColor?: string): void => {
    if (backColor) {
      this.el.nativeElement.style.backgroundColor = backColor 
    }
    else {
      this.el.nativeElement.style.backgroundColor = ''; 
    }
  };

  @HostListener('mouseenter')
  senan() {
    this.changeBackColor(this.secondColor);
    this.el.nativeElement.style.fontStyle = "italic";
  }

  @HostListener('mouseleave')
  enis() {
    this.changeBackColor();
    this.el.nativeElement.style.fontStyle = "normal";
  }

  


}
