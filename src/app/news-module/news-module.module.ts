import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsServise } from "./news-date.servise";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NewsListComponent } from "./news-list/news-list.component";
import { CreatnewsComponent } from "./creatnews/creatnews.component";
import { EditnewsComponent } from "./editnews/editnews.component";
import { DeletenewsComponent } from "./deletenews/deletenews.component";
import { OnenewsComponent } from "./onenews/onenews.component";
import { RouterModule } from "@angular/router";
import { CommentModuleModule } from "../comment-module/comment-module.module";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    CommentModuleModule,
    RouterModule.forRoot([

      {path: 'creat', component : CreatnewsComponent},
      {path: 'news', component : NewsListComponent},
      { path: 'news/:id', component: OnenewsComponent},
      { path: 'news/edit/:id', component: EditnewsComponent},
      { path: 'news/delete/:id', component: DeletenewsComponent}
    ])
  ],
  declarations: [
    NewsListComponent,
    CreatnewsComponent,
    EditnewsComponent,
    DeletenewsComponent,
    OnenewsComponent

  ],
  providers: [NewsServise]
})
export class NewsModuleModule { }
