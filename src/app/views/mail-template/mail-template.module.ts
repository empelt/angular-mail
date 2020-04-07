import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common';

import { MailtemplateComponent } from './mail-template.component';
import { MailtemplateRoutingModule } from './mail-template-routing.module';

@NgModule({
  imports: [
    FormsModule,
    MailtemplateRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule,
  ],
  declarations: [MailtemplateComponent],
})
export class MailtemplateModule {}
