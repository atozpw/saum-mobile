import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { TimelineComponentModule } from '../../components/timeline/timeline.module';

import { ListSchedulePage } from './list-schedule';

@NgModule({
  declarations: [
    ListSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(ListSchedulePage),
    TranslateModule.forChild(),
    TimelineComponentModule
  ],
  exports: [
    ListSchedulePage
  ]
})

export class ListSchedulePageModule {}
