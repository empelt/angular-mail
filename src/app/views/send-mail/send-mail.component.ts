import { Component } from '@angular/core';
import { Template } from "../../models/template";

@Component({
  templateUrl: 'send-mail.component.html'
})
export class SendMailComponent {

  constructor() { }

  templates = new Array<Template>();

  ngOnInit() {
    var tmp_template = new Template();
    tmp_template.id = 1;
    tmp_template.title = "test1";
    tmp_template.from = "test1";
    tmp_template.content = "this is sample sentence1.";
    this.templates.push(tmp_template);

    var tmp_template2 = new Template();
    tmp_template2.id = 2;
    tmp_template2.title = "test2";
    tmp_template2.from = "test2";
    tmp_template2.content = "this is sample sentence2.";
    this.templates.push(tmp_template2); 

    var tmp_template3 = new Template();
    tmp_template3.id = 3;
    tmp_template3.title = "test3";
    tmp_template3.from = "test3";
    tmp_template3.content = "this is sample sentence3.";
    this.templates.push(tmp_template3); 

    var tmp_template4 = new Template();
    tmp_template4.id = 4;
    tmp_template4.title = "test4";
    tmp_template4.from = "test4";
    tmp_template4.content = "this is sample sentence4.";
    this.templates.push(tmp_template4); 
  }

}
