import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface CanComponentDeactivate {
 canDeactivate: () => true;
}

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate> {

  constructor() { 
  }

  canDeactivate(component: CanComponentDeactivate) {
  	return confirm("Are You Sure?");
  }
  
}
