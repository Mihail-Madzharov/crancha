import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [FileUploadComponent],
  exports: [FileUploadComponent]
})
export class UiModule {}
