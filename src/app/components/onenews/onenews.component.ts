import { Component, OnInit } from '@angular/core';
import { NewsServise } from "../../news-date.servise";
import { News } from "../../news.servise";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-onenews',
  templateUrl: './onenews.component.html',
  styleUrls: ['./onenews.component.css']
})
export class OnenewsComponent implements OnInit {
public item :News;
  id: number;
  private sub: Subscription;
  constructor(private activateRoute: ActivatedRoute, private newsdate: NewsServise) {
    this.sub = activateRoute.params.subscribe(params => this.id = +params['id']);
  }

  ngOnInit() {
    this.getNew()

  }

  private getNew(){
    this.newsdate.getNew(this.id).subscribe(
        data =>{
          this.item = data;

        }
    );
}
}
