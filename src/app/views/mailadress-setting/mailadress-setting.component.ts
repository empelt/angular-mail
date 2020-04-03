import { Component } from '@angular/core';

import { Adress } from "../../models/adress";

@Component({
  templateUrl: 'mailadress-setting.component.html'
})
export class MailadressSettingComponent {

  constructor() { }

  adresses = new Array<Adress>();

  ngOnInit() {
    var add_adress = new Adress();
    add_adress.id = 1;
    add_adress.username = "test1";
    add_adress.adress = "test1@gmail.com";
    this.adresses.push(add_adress);

    var add_adress2 = new Adress();
    add_adress2.id = 2;
    add_adress2.username = "test2";
    add_adress2.adress = "test2@gmail.com";
    this.adresses.push(add_adress2);

    var add_adress3 = new Adress();
    add_adress3.id = 3;
    add_adress3.username = "test3";
    add_adress3.adress = "test3@gmail.com";
    this.adresses.push(add_adress3);
  }

}
