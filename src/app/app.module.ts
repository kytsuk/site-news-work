import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CommentModuleModule } from "./comment-module/comment-module.module";
import { NewsModuleModule } from "./news-module/news-module.module";
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    AppComponent,

      ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommentModuleModule,
    NewsModuleModule,
      RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
