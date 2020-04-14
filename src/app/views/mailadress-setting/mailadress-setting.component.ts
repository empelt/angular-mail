import { Component } from '@angular/core';

//import { Adress } from '../../models/adress';

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
    { id: 6, username: 'test5', adress: 'test5@gmail.com' },
    { id: 7, username: 'test5', adress: 'test5@gmail.com' },
    { id: 8, username: 'test5', adress: 'test5@gmail.com' },
    { id: 9, username: 'test5', adress: 'test5@gmail.com' },
    { id: 10, username: 'test5', adress: 'test5@gmail.com' },
    { id: 11, username: 'test5', adress: 'test5@gmail.com' },
    { id: 12, username: 'test5', adress: 'test5@gmail.com' },
    { id: 13, username: 'test5', adress: 'test5@gmail.com' },
    { id: 14, username: 'test5', adress: 'test5@gmail.com' },
    { id: 15, username: 'test5', adress: 'test5@gmail.com' },
  ];

  begin = 0;
  length = 8;
  size = (Object.keys(this.adresses).length - 1) / this.length;

  selectedIndex: number = 1;

  pagerlist = [];
  ngOnInit() {
    for (let n = 0; n < this.size; n++) {
      this.pagerlist.push(n);
    }
  }
  pager(page: number) {
    page -= 1;
    this.begin = this.length * page;
    this.selectedIndex = page-1;
  }
}
