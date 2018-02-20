import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipePage } from './pipe';

@NgModule({
  declarations: [
    PipePage,
  ],
  imports: [
    IonicPageModule.forChild(PipePage),
  ],
})
export class PipePageModule {}
