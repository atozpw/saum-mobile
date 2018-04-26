import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListNewsPage } from './list-news';

@NgModule({
  declarations: [
    ListNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListNewsPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListNewsPage
  ]
})
export class ListNewsPageModule { }
