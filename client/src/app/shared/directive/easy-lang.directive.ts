import { Directive, TemplateRef, ViewContainerRef, Input, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appEasyLang]'
})
export class EasyLangDirective implements AfterViewInit {

  constructor(
    private elementRef: ElementRef
  ) {
  }

  ngAfterViewInit() {
    let str = this.elementRef.nativeElement.innerText.toUpperCase()

    const newStr = str.replaceAll('А', "<span class = red>А</span>").replaceAll('О', "<span class = red>О</span>")
    .replaceAll('У', "<span class = red>У</span>").replaceAll('Ы', "<span class = red>Ы</span>")
    .replaceAll('Ю', "<span class = red>Ю</span>").replaceAll('Ё', "<span class = red>Ё</span>")
    .replaceAll('Э', "<span class = red>Э</span>").replaceAll('Я', "<span class = red>Я</span>")
    .replaceAll('И', "<span class = red>И</span>").replaceAll('Е', "<span class = red>Е</span>")
    this.elementRef.nativeElement.innerHTML = newStr
  }
  
}
