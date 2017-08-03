import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'awesome'
})
/** Precede the input string with the word "Awesome " */
export class AwesomePipe implements PipeTransform {

	transform(phrase: string, args?: any): any {
		return phrase ? 'Awesome ' + phrase : '';
	}

}
