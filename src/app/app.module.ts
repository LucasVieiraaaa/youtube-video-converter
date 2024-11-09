import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [	
    AppComponent
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