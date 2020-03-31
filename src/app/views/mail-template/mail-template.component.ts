import { Component } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Template } from "../../models/template";

@Component({
  templateUrl: "mail-template.component.html"
})
export class MailtemplateComponent {
  constructor(private http: HttpClient) {}

  isCollapsed: boolean = false;
  iconCollapse: string = "icon-arrow-up";
  templates = new Array<Template>();

  ngOnInit() {
    var body = "'username=test&password=test'";
    var headers = new Headers();

    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    fetch("https://mail-255905.appspot.com/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: body // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
    }).then(response => {
      response.json();
      console.log(response);
    });
    var tmp_template = new Template();
    tmp_template.id = 1;
    tmp_template.title = "test";
    tmp_template.from = "test@gmail.com";
    tmp_template.content = "test_content";
    this.templates.push(tmp_template);
    var tmp_template2 = new Template();
    tmp_template2.id = 2;
    tmp_template2.title = "test2";
    tmp_template2.from = "test2@gmail.com";
    tmp_template2.content = "test_content2";
    this.templates.push(tmp_template2);

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
    this.iconCollapse = this.isCollapsed ? "icon-arrow-down" : "icon-arrow-up";
  }

  private errorHandler(err) {
    console.log("Error occured.", err);
    return Promise.reject(err.message || err);
  }
}
