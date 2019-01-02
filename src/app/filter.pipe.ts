import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  	let condition:string = args[0];
  	let str:string = args[1].toLowerCase();
  	let finalValue:Array<string> = [];

  	if (!value) return value;

  	value.forEach((content) => {
	  	if(condition === 'startBy' && content.toLowerCase().indexOf(str) === 0) {
	  		finalValue.push(content);
	  	} else if(condition === 'endBy' && content.lastIndexOf(str) === (content.length - str.length)) {
	  		finalValue.push(content);
	  	}
  	});

  	return finalValue;
  }

}
