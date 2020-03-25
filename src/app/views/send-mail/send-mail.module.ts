import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { SendMailComponent } from './send-mail.component';
import { SendMailRoutingModule } from './send-mail-routing.module';

@NgModule({
  imports: [
    FormsModule,
    SendMailRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ SendMailComponent ]
})
export class SendMailModule { }
