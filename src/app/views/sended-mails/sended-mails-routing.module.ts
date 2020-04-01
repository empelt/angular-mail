import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendedMailsComponent } from './sended-mails.component';

import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: '',
    component: SendedMailsComponent,
    data: {
      title: 'Send Mail'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
})
export class SendedMailsRoutingModule {}
