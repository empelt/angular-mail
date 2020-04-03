import { Component } from '@angular/core';

import { SendedMail } from "../../models/sendedmail";

@Component({
  templateUrl: 'sended-mails.component.html'
})
export class SendedMailsComponent {

  constructor() { }

  sendedmails = new Array<SendedMail>();

  ngOnInit() {
    var add_sendedmail = new SendedMail();
    add_sendedmail.date = "2020/1/1";
    add_sendedmail.to = "test1";
    add_sendedmail.title = "hello! test1";
    this.sendedmails.push(add_sendedmail);

    var add_sendedmail2 = new SendedMail();
    add_sendedmail2.date = "2020/1/2";
    add_sendedmail2.to = "test2";
    add_sendedmail2.title = "hello! test2";
    this.sendedmails.push(add_sendedmail2);

    var add_sendedmail3 = new SendedMail();
    add_sendedmail3.date = "2020/1/3";
    add_sendedmail3.to = "test3";
    add_sendedmail3.title = "hello! test3";
    this.sendedmails.push(add_sendedmail3);
  }

}
