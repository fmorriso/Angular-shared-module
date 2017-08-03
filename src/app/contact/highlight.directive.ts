// Same directive name and selector as
// HighlightDirective in parent AppModule
// It selects for both input boxes and  'highlight' attr
// and it highlights in blue instead of gold
import {Directive, ElementRef} from '@angular/core';

@Directive({
	selector: '[highlight], input'
})
/** Highlight the attached element or an InputElement in blue */
export class HighlightDirective {

	private backgroundColor: string = 'powderblue';

	constructor(el: ElementRef) {
		el.nativeElement.style.backgroundColor = this.backgroundColor;
		console.log(
			`* Contact highlight called for ${el.nativeElement.tagName}, color=${this.backgroundColor}`);
	}
}
