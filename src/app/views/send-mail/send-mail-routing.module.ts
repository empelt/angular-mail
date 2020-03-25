import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendMailComponent } from './send-mail.component';

const routes: Routes = [
  {
    path: '',
    component: SendMailComponent,
    data: {
      title: 'Send Mail'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendMailRoutingModule {}
