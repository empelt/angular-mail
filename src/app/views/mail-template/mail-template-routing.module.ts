import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailtemplateComponent } from './mail-template.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: MailtemplateComponent,
    data: {
      title: 'Mail Template',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class MailtemplateRoutingModule {}
