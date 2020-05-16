import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PathUploadComponent } from './path-upload.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: PathUploadComponent
  }
];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [PathUploadComponent]
})
export class FeaturePathUploadModule {}
