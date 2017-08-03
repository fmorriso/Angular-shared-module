import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
/** Highlight the attached element in gold */
export class HighlightDirective {

	private backgroundColor: string = 'gold';

	constructor(el: ElementRef) {
		el.nativeElement.style.backgroundColor = this.backgroundColor;
		console.log(
			`* Contact highlight called for ${el.nativeElement.tagName}, color=${this.backgroundColor}`);
	}

}
