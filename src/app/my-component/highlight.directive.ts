import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  el: ElementRef;
  @Input() defaultColor: string;
  color: string;
  constructor(el: ElementRef) {
    this.el = el;
    this.defaultColor = '';
    this.color = '';
  }
  
  ngOnInit(): void {
    this.color = this.defaultColor;
    this.el.nativeElement.style.backgroundColor = this.defaultColor;
  }
}
