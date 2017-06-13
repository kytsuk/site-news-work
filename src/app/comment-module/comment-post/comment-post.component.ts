import { Component, OnInit } from '@angular/core';
import { Comments } from "../comments.servise";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";
import { CommentsServise } from "../comments-date.servise";

@Component({
  selector: 'app-comment-post',
  templateUrl: './comment-post.component.html',
  styleUrls: ['./comment-post.component.css']
})
export class CommentPostComponent implements OnInit {
  public item :Comments[];
  id: number;
  private sub: Subscription;
  constructor(private activateRoute: ActivatedRoute, private commentservise: CommentsServise, private router:Router) {
    this.sub = activateRoute.params.subscribe(params => this.id = +params['id']);
  }
  ngOnInit() {
  this.getComments();

  }
  private getComments(){
    this.commentservise.getComments(this.id).subscribe(
        data =>{
          this.item = data;

        }
    );

  }
  onDelete(id:number) {

    this.commentservise.deleteComment(id).subscribe(
        ()=>this.goBack()
    );
  }
  goBack() {
    this.router.navigate(['/news'])
  }
}
