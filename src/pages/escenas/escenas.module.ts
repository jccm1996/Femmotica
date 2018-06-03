import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscenasPage } from './escenas';

@NgModule({
  declarations: [
    EscenasPage,
  ],
  imports: [
    IonicPageModule.forChild(EscenasPage),
  ],
})
export class EscenasPageModule {}
