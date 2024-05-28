import { NgModule, ModuleWithProviders } from '@angular/core';

import { DocumentService } from './document.service';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
})
export class DocumentModule {
  static forRoot(): ModuleWithProviders<DocumentModule> {
    return {
      ngModule: DocumentModule,
      providers: [DocumentService],
    };
  }
}
