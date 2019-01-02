import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[inputValidate]'
})
export class ValidateDirective {
	ele:ElementRef;
	renderer:Renderer;

  constructor(private el: ElementRef, private r: Renderer) {
  	this.ele = el;
  	this.renderer = r;
  }

	@HostListener('change') onChange() {
		if(this.ele.nativeElement.type === 'text' || this.ele.nativeElement.type === 'password') {
			if(this.ele.nativeElement.value.trim()) {
	  		this.renderer.setElementStyle(this.ele.nativeElement, 'borderColor', 'green');
			} else {
				this.renderer.setElementStyle(this.ele.nativeElement, 'borderColor', 'red');
			}
		}
	}

}
