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
import { FusionAuthModule } from '@fusionauth/angular-sdk';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ServerModule,
    RouterModule.forRoot(routes),
    DocumentModule.forRoot(),
    FusionAuthModule.forRoot({
      clientId: 'e9fdb985-9173-4e01-9d73-ac2d60d1dc8e',
      serverUrl: 'http://localhost:9011',
      redirectUri: 'http://localhost:3000',
      scope: 'openid email profile offline_access',
      shouldAutoRefresh: true,
      autoRefreshSecondsBeforeExpiry: 60 * 60 - 5,
      onRedirect(state) {
        console.log('redirected with state:', state);
      },
    }),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
