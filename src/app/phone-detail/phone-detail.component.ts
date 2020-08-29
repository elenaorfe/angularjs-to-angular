import * as angular from 'angular';
import { Component, Inject } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import { ActivatedRoute } from '@angular/router';

import { PhoneData, Phone } from '../core/phone/phone.service';

// Register `phoneDetail` component, along with its associated controller and template
@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.component.html'
})
export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;

  constructor(activateRoute: ActivatedRoute, phone: Phone) {
    let phoneId = activateRoute.snapshot.paramMap.get('phoneId');
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
  