import { Component } from '@angular/core';

import { Adress } from '../../models/adress';

@Component({
  templateUrl: 'mailadress-setting.component.html',
})
export class MailadressSettingComponent {
  constructor() {}

  adresses = new Array<Adress>();

  ngOnInit() {
    const addAdress = new Adress();

    addAdress.id = 1;
    addAdress.username = 'test1';
    addAdress.adress = 'test1@gmail.com';
    this.adresses.push(addAdress);

    const addAdress2 = new Adress();
    addAdress2.id = 2;
    addAdress2.username = 'test2';
    addAdress2.adress = 'test2@gmail.com';
    this.adresses.push(addAdress2);

    const addAdress3 = new Adress();
    addAdress3.id = 3;
    addAdress3.username = 'test3';
    addAdress3.adress = 'test3@gmail.com';
    this.adresses.push(addAdress3);
  }
}
