import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { ShellModule } from '@crancha/public';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ShellModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [{ provide: BUCKET, useValue: 'gs://crancha-71fc8.appspot.com' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
