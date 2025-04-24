import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForEachPipesPipe } from './share/for-each-pipes.pipe';
import { appRoutes } from './app.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ForEachPipesPipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
