import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendMailComponent } from './send-mail.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: SendMailComponent,
    data: {
      title: 'Send Mail',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class SendMailRoutingModule {}
