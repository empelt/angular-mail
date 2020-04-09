import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Template } from '../../models/template';

@Component({
  templateUrl: 'mail-template.component.html',
})
export class MailtemplateComponent {
  constructor(private http: HttpClient) {}

  isCollapsed = false;
  iconCollapse = 'icon-arrow-up';

  //templates = new Array<Template>();

  templates = [
    {
      id: 1,
      title: 'test1',
      from: 'test1@gmail.com',
      content: 'test_content1',
    },
    {
      id: 2,
      title: 'test2',
      from: 'test2@gmail.com',
      content: 'test_content2',
    },
    {
      id: 3,
      title: 'test3',
      from: 'test3@gmail.com',
      content: 'test_content3',
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

  ngOnInit() {
    const body = "'username=test&password=test'";
    const headers = new Headers();

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    fetch('https://mail-255905.appspot.com/login', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: body, // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
    }).then((response) => {
      response.json();
      console.log(response);
    });
    /*
    const tmp_template = new Template();
    tmp_template.id = 1;
    tmp_template.title = 'test';
    tmp_template.from = 'test@gmail.com';
    tmp_template.content = 'test_content';
    this.templates.push(tmp_template);
    const tmp_template2 = new Template();
    tmp_template2.id = 2;
    tmp_template2.title = 'test2';
    tmp_template2.from = 'test2@gmail.com';
    tmp_template2.content = 'test_content2';
    this.templates.push(tmp_template2);
    */

    console.log(this.templates);
  }

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

  saveTemplate(event: any) {
    console.log(event);
  }

  resetTemplate(event: any) {
    console.log(event);
  }

  private errorHandler(err) {
    console.log('Error occured.', err);
    return Promise.reject(err.message || err);
  }
}
