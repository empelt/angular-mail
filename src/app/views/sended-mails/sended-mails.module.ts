import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { SendedMailsComponent } from './sended-mails.component';
import { SendedMailsRoutingModule } from './sended-mails-routing.module';

@NgModule({
  imports: [
    FormsModule,
    SendedMailsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ SendedMailsComponent ]
})
export class SendedMailsModule { }
