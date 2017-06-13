import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentPostComponent } from "./comment-post/comment-post.component";
import { CommentAddComponent } from "./comment-add/comment-add.component";
import { CommentsServise } from "./comments-date.servise";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [
    CommentPostComponent,
    CommentAddComponent
  ],
  exports: [
      CommentPostComponent,
    CommentAddComponent
  ],
  providers: [ CommentsServise],
})
export class CommentModuleModule { }
