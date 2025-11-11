import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { enableProdMode } from '@angular/core';
import { ChatWorkbenchComponent } from './app/chat-workbench.component';

// enableProdMode(); // uncomment for production

bootstrapApplication(ChatWorkbenchComponent, {
  providers: [provideAnimations()]
}).catch(err => console.error(err));
