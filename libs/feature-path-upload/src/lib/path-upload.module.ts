import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '@crancha/ui';

import { PathUploadComponent } from './path-upload.component';

const routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PathUploadComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    UiModule
  ],
  declarations: [PathUploadComponent]
})
export class FeaturePathUploadModule {}
