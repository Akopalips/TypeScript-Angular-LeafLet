import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TusMapMain } from './tus-map.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ TusMapMain ],
  bootstrap:    [ TusMapMain ]
})
export class AppModule { }
