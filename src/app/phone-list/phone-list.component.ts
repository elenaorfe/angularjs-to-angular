import * as angular from 'angular';
import { Component } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

import { PhoneData, Phone } from '../core/phone/phone.service';

// Register `phoneList` component, along with its associated controller and template
@Component({
  selector: 'phone-list',
  templateUrl: './phone-list.component.html'
})
export class PhoneListComponent {
  phones: PhoneData[];
  query: string;
  orderProp: string;

  constructor(phone: Phone) {
    phone.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }
}

angular.
  module('phoneList').
  directive(
    'phoneList', 
    downgradeComponent({component: PhoneListComponent}) as angular.IDirectiveFactory
  );