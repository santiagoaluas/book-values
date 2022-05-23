import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscenaPage } from './escena.page';

const routes: Routes = [
  {
    path: '',
    component: EscenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscenaPageRoutingModule {}
