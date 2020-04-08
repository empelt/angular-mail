import { Component } from '@angular/core';
import { Template } from '../../models/template';

@Component({
  templateUrl: 'send-mail.component.html',
})
export class SendMailComponent {
  constructor() {}

  //templates = new Array<Template>();
  templates = [
    {
      id: 1,
      title: 'test1',
      from: 'test1@gmail.com',
      content: 'test_content1 こんにちわ',
    },
    {
      id: 2,
      title: 'test2',
      from: 'test2@gmail.com',
      content: 'test_content2　いつもお世話になっております',
    },
    {
      id: 3,
      title: 'test3',
      from: 'test3@gmail.com',
      content: 'test_content3　はろう',
    },
    {
      id: 4,
      title: 'test4',
      from: 'test4@gmail.com',
      content: 'test_content4',
    },
    {
      id: 5,
      title: 'test5',
      from: 'test5@gmail.com',
      content: 'test_content5',
    },
  ];

  showtmp = new Template();

  ngOnInit() {
    this.showtmp.id = null;
    this.showtmp.title = '';
    this.showtmp.from = '';
    this.showtmp.content = '';
    /*
    const tmp_template = new Template();
    tmp_template.id = 1;
    tmp_template.title = 'test1';
    tmp_template.from = 'test1';
    tmp_template.content = 'this is sample sentence1.';
    this.templates.push(tmp_template);

    const tmp_template2 = new Template();
    tmp_template2.id = 2;
    tmp_template2.title = 'test2';
    tmp_template2.from = 'test2';
    tmp_template2.content = 'this is sample sentence2.';
    this.templates.push(tmp_template2);

    const tmp_template3 = new Template();
    tmp_template3.id = 3;
    tmp_template3.title = 'test3';
    tmp_template3.from = 'test3';
    tmp_template3.content = 'this is sample sentence3.';
    this.templates.push(tmp_template3);

    const tmp_template4 = new Template();
    tmp_template4.id = 4;
    tmp_template4.title = 'test4';
    tmp_template4.from = 'test4';
    tmp_template4.content = 'this is sample sentence4.';
    this.templates.push(tmp_template4);
    */
  }
  onOptionsSelected(event: any) {
    console.log(event);
    this.showtmp.from = this.templates.find((v) => v.id == event).from;
    this.showtmp.content = this.templates.find((v) => v.id == event).content;
  }
}
