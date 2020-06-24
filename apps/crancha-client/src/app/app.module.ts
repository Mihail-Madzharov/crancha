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
import {
  StoreModule,
  META_REDUCERS,
  ActionReducer,
  MetaReducer
} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ShellModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot()
  ],
  providers: [
    { provide: BUCKET, useValue: 'gs://crancha-71fc8.appspot.com' },
    {
      provide: META_REDUCERS,
      useFactory: metaReducerFactory,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function metaReducerFactory(): MetaReducer<any> {
  return (reducer: ActionReducer<any>) => (state, action) => {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}
