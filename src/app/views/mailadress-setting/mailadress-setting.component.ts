import { Component } from '@angular/core';

import { Adress } from '../../models/adress';

@Component({
  templateUrl: 'mailadress-setting.component.html',
})
export class MailadressSettingComponent {
  constructor() {}

  //adresses = new Array<Adress>();

  adresses = [
    { id: 1, username: 'test1', adress: 'test1@gmail.com' },
    { id: 2, username: 'test2', adress: 'test2@gmail.com' },
    { id: 3, username: 'test3', adress: 'test3@gmail.com' },
    { id: 4, username: 'test4', adress: 'test4@gmail.com' },
    { id: 5, username: 'test5', adress: 'test5@gmail.com' },
  ];

  ngOnInit() {
    /*
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
    */
  }
}
