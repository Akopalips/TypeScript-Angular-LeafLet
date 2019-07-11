import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TusMap } from './tus-map.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ TusMap ],
  bootstrap:    [ TusMap ]
})
export class AppModule { }
