import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { AccordionListComponentModule } from '../../components/accordion-list/accordion-list.module';

import { ListDoaPage } from './list-doa';

@NgModule({
  declarations: [
    ListDoaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListDoaPage),
    TranslateModule.forChild(),
    AccordionListComponentModule
  ],
  exports: [
    ListDoaPage
  ]
})

export class ListDoaPageModule {}
