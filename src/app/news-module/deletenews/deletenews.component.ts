import { Component, OnInit } from '@angular/core';
import { News } from "../news.servise";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";
import { NewsServise } from "../news-date.servise";

@Component({
  selector: 'app-deletenews',
  templateUrl: './deletenews.component.html',
  styleUrls: ['./deletenews.component.css']
})
export class DeletenewsComponent implements OnInit {
  public item :News;
  id: number;
  private sub: Subscription;
  constructor(private activateRoute: ActivatedRoute, private newsdate: NewsServise, private router:Router) {
    this.sub = activateRoute.params.subscribe(params => this.id = +params['id']);
  }

  ngOnInit() {

    this.newsdate.getNew(this.id).subscribe(
        data =>{this.item = data;
        }
        );

  }
onDelete(){

    this.newsdate.deleteNews(this.item.id).subscribe(
        ()=>this.goBack()
    );

  }
  goBack() {
    this.router.navigate(['/news'])
  }

  }

