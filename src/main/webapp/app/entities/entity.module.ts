import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'user-record',
        loadChildren: './user-record/user-record.module#GjishoUserRecordModule'
      },
      {
        path: 'answer',
        loadChildren: './answer/answer.module#GjishoAnswerModule'
      },
      {
        path: 'user-record-variable',
        loadChildren: './user-record-variable/user-record-variable.module#GjishoUserRecordVariableModule'
      },
      {
        path: 'record-list',
        loadChildren: './record-list/record-list.module#GjishoRecordListModule'
      },
      {
        path: 'tag',
        loadChildren: './tag/tag.module#GjishoTagModule'
      },
      {
        path: 'user-data',
        loadChildren: './user-data/user-data.module#GjishoUserDataModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GjishoEntityModule {}
