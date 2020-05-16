import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { ShellRoutingModule } from './shell-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, ShellRoutingModule, IonicModule,],
  declarations: [ShellComponent]
})
export class ShellModule {}
