import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailtemplateComponent } from './mail-template.component';

const routes: Routes = [
  {
    path: '',
    component: MailtemplateComponent,
    data: {
      title: 'Mail Template'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailtemplateRoutingModule {}
