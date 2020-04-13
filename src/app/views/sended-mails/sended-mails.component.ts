import { Component } from '@angular/core';

import { SendedMail } from '../../models/sendedmail';

@Component({
  templateUrl: 'sended-mails.component.html',
})
export class SendedMailsComponent {
  constructor() {}

  sendedmails = [
    { date: '2020/1/1', to: 'test1', title: 'hello! test1' },
    { date: '2020/1/2', to: 'test2', title: 'hello! test2' },
    { date: '2020/1/3', to: 'test3', title: 'hello! test3' },
    { date: '2020/1/4', to: 'test4', title: 'hello! test4' },
    { date: '2020/1/5', to: 'test5', title: 'hello! test5' },
    { date: '2020/1/6', to: 'test6', title: 'hello! test6' },
    { date: '2020/1/7', to: 'test7', title: 'hello! test7' },
    { date: '2020/1/8', to: 'test8', title: 'hello! test8' },
    { date: '2020/1/9', to: 'test9', title: 'hello! test9' },
    { date: '2020/1/10', to: 'test10', title: 'hello! test10' },
    { date: '2020/1/11', to: 'test11', title: 'hello! test11' },
    { date: '2020/1/12', to: 'test12', title: 'hello! test12' },
    { date: '2020/1/13', to: 'test13', title: 'hello! test13' },
    { date: '2020/1/14', to: 'test14', title: 'hello! test14' },
    { date: '2020/1/15', to: 'test15', title: 'hello! test15' },
    { date: '2020/1/16', to: 'test16', title: 'hello! test16' },
  ];

  begin = 0;
  length = 5;
  size = (Object.keys(this.sendedmails).length - 1) / 5;

  pagerlist = [];
  ngOnInit() {
    for (let n = 0; n < this.size; n++) {
      this.pagerlist.push(n);
    }
  }
  pager(page: number) {
    this.begin = this.length * page;
  }
}
