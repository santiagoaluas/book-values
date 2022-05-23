import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscenaPageRoutingModule } from './escena-routing.module';

import { EscenaPage } from './escena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscenaPageRoutingModule
  ],
  declarations: [EscenaPage]
})
export class EscenaPageModule {}
