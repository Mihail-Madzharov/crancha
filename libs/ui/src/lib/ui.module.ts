import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ShowMarkerWindowInfoDirective } from './directives/show-marker-window-info.directive';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [FileUploadComponent, ShowMarkerWindowInfoDirective],
  exports: [FileUploadComponent, ShowMarkerWindowInfoDirective]
})
export class UiModule {}
