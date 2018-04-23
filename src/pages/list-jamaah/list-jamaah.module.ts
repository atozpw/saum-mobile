import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListJamaahPage } from './list-jamaah';

@NgModule({
  declarations: [
    ListJamaahPage,
  ],
  imports: [
    IonicPageModule.forChild(ListJamaahPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListJamaahPage
  ]
})
export class ListJamaahPageModule { }
