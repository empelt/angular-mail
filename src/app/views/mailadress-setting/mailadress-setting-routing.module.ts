import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailadressSettingComponent } from './mailadress-setting.component';
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: '',
    component: MailadressSettingComponent,
    data: {
      title: 'Mailadress Setting'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class MailadressSettingRoutingModule {}
