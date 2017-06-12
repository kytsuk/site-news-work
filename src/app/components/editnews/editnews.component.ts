import { Component, OnInit } from '@angular/core';
import { News } from "../../news.servise";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";
import { NewsServise } from "../../news-date.servise";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-editnews',
  templateUrl: './editnews.component.html',
  styleUrls: ['./editnews.component.css']
})
export class EditnewsComponent implements OnInit {
  myForm: FormGroup;
  public item :News;
  id: number;
  private sub: Subscription;
  constructor(private activateRoute: ActivatedRoute, private newsdate: NewsServise) {
    this.sub = activateRoute.params.subscribe(params => this.id = +params['id']);
    this.newsdate.getNew(this.id).subscribe(
        data =>{this.item = data;}
    );

  }
  ngOnInit() {

    this.myForm = new FormGroup({
      title: new FormControl('', Validators.required),
      date: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
      img_url: new FormControl('', Validators.required)
    });

  };

  public  onsubmit(myForm: FormGroup) {
    console.log(this.id);
    let post = new  News(this.id, myForm.value.title,  myForm.value.text, myForm.value.date, myForm.value.img_url);
    console.log(post);
    this.newsdate.editNews(this.id, post);
  }

}
