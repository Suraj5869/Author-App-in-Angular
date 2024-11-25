import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAuthorComponent } from './author/add-author/add-author.component';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorUpdateComponent } from './author/author-update/author-update.component';
import { SearchAuthorComponent } from './author/search-author/search-author.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAuthorComponent,
    AuthorListComponent,
    AuthorUpdateComponent,
    SearchAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
