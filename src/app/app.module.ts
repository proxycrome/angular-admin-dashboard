import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { ArticlesComponent } from './modules/articles/articles.component';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { LeedsComponent } from './modules/leeds/leeds.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ContactsComponent,
    LeedsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
