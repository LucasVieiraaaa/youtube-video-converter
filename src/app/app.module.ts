import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { DownloadContainerComponent } from './download-container/download-container.component';

@NgModule({
  declarations: [	
    AppComponent,
    DownloadContainerComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }