import { Component, OnInit } from '@angular/core';
import { News } from "../news.servise";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";
import { NewsServise } from "../news-date.servise";
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
  constructor(private activateRoute: ActivatedRoute, private newsdate: NewsServise, private routes:Router) {
    this.sub = activateRoute.params.subscribe(params => this.id = +params['id']);

   /*this.myForm.value.title = this.item.title;*/
  }
  ngOnInit() {

    this.myForm = new FormGroup({
      title: new FormControl('', Validators.required),
      date: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
      img_url: new FormControl('', Validators.required)
    });


    this.newsdate.getNew(this.id).subscribe(
        data =>{this.item = data;
          this.myForm.value.title = this.item.title;

          console.log(this.myForm.value)
        }

    );

  };

  public  onsubmit (myForm: FormGroup) {

    let post = {
     title : myForm.value.title ,
     text: myForm.value.text,
      date: myForm.value.date,
      img_url: myForm.value.img_url
    }/* (this.id, myForm.value.title,  myForm.value.text, myForm.value.date, myForm.value.img_url);*/


    this.newsdate.editNews(this.id, post).subscribe(
        ()=>this.goBack(),
    );
  }
    goBack() {
        this.routes.navigate(['/news'])
    }
}
