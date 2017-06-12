import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CommentsServise } from "../../comments-date.servise";
import { Comments } from "../../comments.servise";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.css']
})
export class CommentAddComponent implements OnInit {
  commentForm: FormGroup;
  id: number;
  private sub: Subscription;
  constructor(private activateRoute: ActivatedRoute, private dataNews: CommentsServise, private router:Router) {
    this.sub = activateRoute.params.subscribe(params => this.id = +params['id']);
  console.log(this.id)
  }

  ngOnInit() {
    this.commentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      text: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required])

    });

  }
  public  onsubmit(commentForm: FormGroup) {


    let item = new  Comments(null,null, null, null, this.id);
    item.name = commentForm.value.name;
    item.text = commentForm.value.text;
    item.date = commentForm.value.date;



    this.dataNews.addComment(item, this.id).subscribe(
        ()=>this.goBack()
    );
  }

  goBack() {
    this.router.navigate(['/news'])
  }

}
