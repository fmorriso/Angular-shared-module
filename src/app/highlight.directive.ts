import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
/** Highlight the attached element in blue */
export class HighlightDirective {

	constructor(el: ElementRef) {
		el.nativeElement.style.backgroundColor = 'powderblue';
		console.log(
			`* AppRoot highlight called for ${el.nativeElement.tagName}`);
	}

}
