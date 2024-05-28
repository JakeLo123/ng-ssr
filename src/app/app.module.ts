import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ServerModule } from '@angular/platform-server';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { DocumentModule } from './document-service/document.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ServerModule,
    RouterModule.forRoot(routes),
    DocumentModule.forRoot(),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
