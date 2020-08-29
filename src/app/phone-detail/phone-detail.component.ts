import * as angular from 'angular';
import { Component, Inject } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

import { PhoneData, Phone } from '../core/phone/phone.service';

// Register `phoneDetail` component, along with its associated controller and template
@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.component.html'
})
export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;

  constructor(@Inject(String) private $routeParams: angular.route.IRouteParamsService, phone: Phone) {
    let phoneId = $routeParams['phoneId'];
    phone.get(phoneId).subscribe(data => {
      this.phone = data;
      this.setImage(data.images[0]);
    });
  }

  setImage(imageUrl) {
    this.mainImageUrl = imageUrl;
  }
}

angular.
  module('phoneDetail').
  directive(
    'phoneDetail', 
    downgradeComponent({component: PhoneDetailComponent}) as angular.IDirectiveFactory
  );
  