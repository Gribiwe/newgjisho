import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GjishoSharedLibsModule, GjishoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [GjishoSharedLibsModule, GjishoSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [GjishoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GjishoSharedModule {
  static forRoot() {
    return {
      ngModule: GjishoSharedModule
    };
  }
}
