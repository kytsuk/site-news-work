import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsServise } from "./news-date.servise";
import { CreatnewsComponent } from './components/creatnews/creatnews.component';
import { EditnewsComponent } from './components/editnews/editnews.component';
import { DeletenewsComponent } from './components/deletenews/deletenews.component';
import { OnenewsComponent } from './components/onenews/onenews.component';
import { CommentPostComponent } from './components/comment-post/comment-post.component';
import { CommentsServise } from "./comments-date.servise";
import { CommentAddComponent } from './components/comment-add/comment-add.component';

const approutes: Routes = [

    {path: 'creat', component : CreatnewsComponent},
    {path: 'news', component : NewsListComponent},
  { path: 'news/:id', component: OnenewsComponent},
  { path: 'news/edit/:id', component: EditnewsComponent},
  { path: 'news/delete/:id', component: DeletenewsComponent}
    ];




@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    CreatnewsComponent,
    EditnewsComponent,
    DeletenewsComponent,
    OnenewsComponent,
    CommentPostComponent,
    CommentAddComponent




  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approutes),
      ReactiveFormsModule

  ],
  providers: [NewsServise, CommentsServise],
  bootstrap: [AppComponent]
})
export class AppModule { }
