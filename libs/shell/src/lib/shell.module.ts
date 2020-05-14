import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { ShellRoutingModule } from './shell-routing.module';

@NgModule({
  imports: [CommonModule, ShellRoutingModule],
  declarations: [ShellComponent]
})
export class ShellModule {}
