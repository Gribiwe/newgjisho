import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GjishoSharedModule } from 'app/shared';

import {
  SessionsComponent,
  PasswordStrengthBarComponent,
  RegisterComponent,
  ActivateComponent,
  PasswordComponent,
  PasswordResetInitComponent,
  PasswordResetFinishComponent,
  SettingsComponent,
  accountState
} from './';

@NgModule({
  imports: [GjishoSharedModule, RouterModule.forChild(accountState)],
  declarations: [
    ActivateComponent,
    RegisterComponent,
    PasswordComponent,
    PasswordStrengthBarComponent,
    PasswordResetInitComponent,
    PasswordResetFinishComponent,
    SessionsComponent,
    SettingsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GjishoAccountModule {}