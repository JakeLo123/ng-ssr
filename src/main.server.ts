import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

import { platformServer } from '@angular/platform-server';
import { AppModule } from './app/app.module';

// https://github.com/angular/angular/issues/55341
const bootstrap = AppModule;

export default bootstrap;
