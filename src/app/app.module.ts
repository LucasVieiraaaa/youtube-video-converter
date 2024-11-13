import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { DownloadContainerComponent } from './download-container/download-container.component';
import { MatInputModule} from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { TextContainerComponent } from './text-container/text-container.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [			
    AppComponent,
    DownloadContainerComponent,
      HeaderComponent,
      TextContainerComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    provideAnimationsAsync('noop'),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }